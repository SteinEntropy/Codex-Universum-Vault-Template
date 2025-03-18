function NotesCreatedThisWeek() {
  const data = dc.useCurrentFile();
  const fileName = data.$name;
  console.log("data", fileName);

  // offset to monday as start and sunday as end of week from the .add(1, "days")
  const [startOfWeek, endOfWeek] = dc.useMemo(() => {
    const [year, week] = fileName.split("-W");
    const start = moment()
      .year(parseInt(year))
      .week(parseInt(week))
      .startOf("week")
      .add(1, "days")
      .format("YYYY-MM-DD");
    const end = moment(start).endOf("week").add(1, "days").format("YYYY-MM-DD");
    return [start, end];
  }, [fileName]);

  const COLUMNS = [
    { id: "Note", value: (page) => page.$link },
    { id: "Type", value: (page) => page.$tags },
    { id: "Created", value: (page) => page.value("Created") },
  ];
  const pages = dc.useQuery(
    `@page and !path("Hidden") and date(${startOfWeek}) <= Created and Created <= date(${endOfWeek})`
  );

  return <dc.VanillaTable columns={COLUMNS} rows={pages} paging={10} />;
}

function NotesCreatedToday() {
  const data = dc.useCurrentFile();
  const fileName = data.$name;
  console.log("data", fileName);

  const today = dc.useMemo(() => {
    return moment(fileName).format("YYYY-MM-DD");
  }, [fileName]);

  const COLUMNS = [
    { id: "Note", value: (page) => page.$link },
    { id: "Type", value: (page) => page.$tags },
    { id: "Created", value: (page) => page.value("Created") },
  ];
  const pages = dc.useQuery(
    `@page and !path("Hidden") and date(${today}) == Created`
  );

  return <dc.VanillaTable columns={COLUMNS} rows={pages} paging={10} />;
}

return { NotesCreatedThisWeek, NotesCreatedToday };
