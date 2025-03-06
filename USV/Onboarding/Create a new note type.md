---
Status: 
tags:
  - note
Links:
  - "[[Obsidian]]"
Created: 2024-04-06T05:42:27
---
> [!TIP] Video Example
> I removed Make.md from the vault because it was buggy. Instead of making a new space, make a folder instead in the proper place, and feel free to skip changes related to contexts.
> 
> Watch [this video](https://youtu.be/C6ClLYZHsfE) to see how I implemented [[My Meetings]] and [[My Social Circle]] notes into the vault

## Steps
- [ ] Create a new folder for the note type
### Create Template
Create a new template for the note using the [[New Note Type Template]]
- Be sure to put it in the template sub-folder you want
- Do not include `#` when inputting the tag

```button
name QuickAdd: Create New Note Template
type command
action QuickAdd: Create New Note Template
```

Follow the instructions inside the new template
### Enhance Metadata fields
If you added metadata fields to the vault:
- [ ] Add a [[Metadata Menu Plugin]] fileClass for it so you can configure the new metadata
	- Go to the folder view and click on the + icon beside `Hidden/fileClass`
	- Type the name of the tag
		- If its a subtag like `input/video`, just type it
	- Go to the third tab settings -> enable `map with tag` -> Save
		- If it is a subtag, set the parent tag as the parent
	- Set up the metadata in the second tab
### Create QuickAdd choice
[[QuickAdd Plugin#Template Choice]]
### Create folder note
Create a folder note for it to view all things related to the kind of note, like [[My Inputs]].

### Integrate with other notes
Are there any other note templates that could benefit from having a query for this new note type? If so, add [[Dataview Plugin]] queries in other relevant note templates to integrate with this.