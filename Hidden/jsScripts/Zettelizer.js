module.exports = async (params) => {
    console.log("Starting...");
    console.log(params);
    const currentFile = params.app.workspace.getActiveFile();
    if (!currentFile) {
        new Notice("No active file.");
        return;
    }
    console.log("Found active file: ", currentFile.basename);

    const currentFileContent = await params.app.vault.cachedRead(currentFile);
    const currentFileCache = params.app.metadataCache.getFileCache(currentFile);
    const headingsInFile = currentFileCache.headings;
    if (!headingsInFile) {
        new Notice(`No headers in file ${currentFile.name}`);
        return;
    }
    console.log("Found headings in active file: ", headingsInFile);

    let addedFiles = [];
    let updatedFileContent = [];
    let notesHeaderIndex = null; // Index for the "Notes" section

    // Collect links from level 4 headers and find "## Notes" position
    for (let i = 0; i < headingsInFile.length; i++) {
        const heading = headingsInFile[i];
        console.log(`Checking ${heading.heading}. It is level ${heading.level}`);
        
        // Collect level 4 headers
        if (heading.level === 4) {
            const splitHeading = heading.heading.split(" ");
            const text = splitHeading.join(" ").trim().replace(/[\\,#%&\{\}\/*<>$\'\":@]*/g, "");
            const path = `${text}.md`;
            let content = `Status::\nTags::\nLinks:: <%tp.file.cursor(2)%>\n___\n# ${text}\n![[${currentFile.basename}#${text}]]\n___\nCreated:: ${new Date(Date.now()).toISOString().split("T")[0]}`;

            if (text && !(await params.app.vault.adapter.exists(path))) {
                const file = await params.app.vault.create(path, content);
                addedFiles.push(`- [[${file.basename}]]`); // Add link to the new file
                console.log(`Added file link: - [[${file.basename}]]`); // Log the added link
            } else if (text) {
                new Notice(`File ${path} already exists.`, 5000);
            }
        }

        // Detect the "## Notes" header position
        if (heading.level === 2 && heading.heading.toLowerCase() === "notes") {
            notesHeaderIndex = heading.position.start.line; // Store the start line of "Notes"
            console.log(`Found "Notes" header at line: ${notesHeaderIndex}`); // Log the header index
        }
    }

    // Build updated content with the "Notes" section links
    if (addedFiles.length > 0 && notesHeaderIndex !== null) {
        currentFileContent.split("\n").forEach((line, index) => {
            updatedFileContent.push(line);
            // Insert links below "## Notes" header
            if (index === notesHeaderIndex + 1) { // Add links immediately after the "Notes" header
                updatedFileContent.push(...addedFiles);
                console.log("Inserted links below 'Notes' header."); // Log link insertion
            }
        });

        await params.app.vault.modify(currentFile, updatedFileContent.join("\n"));
    } else {
        console.log("No links added or 'Notes' header not found."); // Log if no links were added
    }

    console.log("Finished!");
};
