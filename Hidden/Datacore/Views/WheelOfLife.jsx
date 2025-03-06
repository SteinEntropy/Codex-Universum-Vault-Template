const { renderWheelOfLifeChart } = await dc.require(
  "Hidden/Datacore/Utilities/Chart.js"
);

function IdealWheelOfLifeChart() {
  const ref = dc.useRef();

  const wheelOfLifeConfigFile = dc.useFile(
    "Hidden/Datacore/Config/My Wheel Of Life.md"
  );
  const fields = wheelOfLifeConfigFile.value("AreasFields");
  const currentFile = dc.useCurrentFile();
  const yearMatch = currentFile.$name.match(/(\d{4})/);
  const year = yearMatch ? yearMatch[1] : new Date().getFullYear();
  const currentYearNote = dc.useFile(`My Calendar/My Yearly Notes/${year}.md`);
  const idealRatings = fields.map((label) => {
    const rating = currentYearNote.value(`${label}GoalRating`);
    if (rating === undefined) {
      throw new Error(
        `Missing field in yearly note: ${label}GoalRating. Please add it to [[${year}]] as number metadata.`
      );
    }
    return rating;
  });

  const areaColors = wheelOfLifeConfigFile.value("AreasColors");
  const labels = wheelOfLifeConfigFile.value("AreasLabels");

  // const indexRevision = dc.useIndexUpdates({ debounce: 1000 });

  // dc.useEffect(() => {
  //   if (!ref.current) return;

  //   ref.current.innerHTML = "";
  //   renderWheelOfLifeChart(ref.current, labels, data);
  // }, [ref.current, indexRevision]);

  // used to manually refresh the chart via button
  const [generation, setGeneration] = dc.useState(0);

  dc.useEffect(() => {
    if (!ref.current) return;

    ref.current.innerHTML = "";
    renderWheelOfLifeChart({
      container: ref.current,
      labels: labels,
      data: idealRatings,
      colors: areaColors,
    });
  }, [ref.current, generation]);

  return (
    <div>
      <dc.Button onClick={() => setGeneration((gen) => gen + 1)}>
        Refresh
      </dc.Button>
      <div ref={ref}></div>
    </div>
  );
}

function PeriodicReviewWheelOfLifeChart() {
  const currentFile = dc.useCurrentFile();

  if (!currentFile.$name.match(/\d{4}(-[QM]\d{2})?/)) {
    return (
      <dc.Callout title={"Error"} type={"warning"}>
        Make sure the file name is in an appropriate format:
        <ul>
          <li>Monthly (2024-M01)</li>
          <li>Quarterly (2024-Q01)</li>
          <li>Yearly (2024)</li>
        </ul>
      </dc.Callout>
    );
  }

  const ref = dc.useRef();
  const wheelOfLifeConfigFile = dc.useFile(
    "Hidden/Datacore/Config/My Wheel Of Life.md"
  );
  const fields = dc.useMemo(
    () => wheelOfLifeConfigFile.value("AreasFields"),
    [wheelOfLifeConfigFile]
  );
  const labels = dc.useMemo(
    () => wheelOfLifeConfigFile.value("AreasLabels"),
    [wheelOfLifeConfigFile]
  );
  const areaColors = dc.useMemo(
    () => wheelOfLifeConfigFile.value("AreasColors"),
    [wheelOfLifeConfigFile]
  );

  if (fields.length !== labels.length || fields.length !== areaColors.length) {
    return (
      <dc.Callout title={"Error"} type={"warning"}>
        Configuration error: fields, labels, and colors must have the same
        length.
      </dc.Callout>
    );
  }

  function weekToDate(year, week) {
    let janFirst = new Date(year, 0, 1);
    // Calculate the number of days to the first Monday of the year
    let daysToFirstMonday = (7 - janFirst.getDay() + 1) % 7;
    let days = (week - 1) * 7 + daysToFirstMonday;

    janFirst.setDate(janFirst.getDate() + days);
    return janFirst;
  }

  const [startDate, endDate] = dc.useMemo(() => {
    const [year, period] = currentFile.$name.split("-");
    const parsedYear = parseInt(year);

    if (!period) {
      // Yearly timeframe
      return [new Date(parsedYear, 0, 1), new Date(parsedYear + 1, 0, 0)];
    } else if (period.startsWith("Q")) {
      // Quarterly timeframe
      const quarter = parseInt(period[1]);
      const quarterStartMonth = (quarter - 1) * 3;
      return [
        new Date(parsedYear, quarterStartMonth, 1),
        new Date(parsedYear, quarterStartMonth + 3, 0),
      ];
    } else if (period.startsWith("M")) {
      // Monthly timeframe
      const month = parseInt(period.substring(1)) - 1;
      return [
        new Date(parsedYear, month, 1),
        new Date(parsedYear, month + 1, 0),
      ];
    }

    return [null, null];
  }, [currentFile]);

  const weeklyNotesInTimeframe = dc.useQuery(
    `@page and #reviews/weekly and !path("Hidden")`
  );
  const filtered = dc.useArray(weeklyNotesInTimeframe, (array) =>
    array.where((item) => {
      let match = item.$name.match(/(\d+)-W(\d+)/);
      let year = parseInt(match[1]);
      let week = parseInt(match[2]);
      let pageDate = weekToDate(year, week);
      return pageDate >= startDate && pageDate <= endDate;
    })
  );

  const sums = {};
  const counts = {};
  const averages = {};

  fields.forEach((field) => {
    sums[field] = 0;
    counts[field] = 0;
  });

  filtered.forEach((page) => {
    fields.forEach((field) => {
      if (page.value(field)) {
        sums[field] += page.value(field);
        counts[field]++;
      }
    });
  });

  fields.forEach((field) => {
    if (counts[field] > 0) {
      averages[field] = (sums[field] / counts[field]).toFixed(1); // Average with one decimal
    }
  });

  const [generation, setGeneration] = dc.useState(0);

  dc.useEffect(() => {
    if (!ref.current) return;

    ref.current.innerHTML = "";
    const orderedAverages = fields.map((field) => averages[field]);
    renderWheelOfLifeChart({
      container: ref.current,
      labels: labels,
      data: orderedAverages,
      colors: areaColors,
    });
  }, [ref.current, generation]);

  function renderAveragesList(averages) {
    return Object.values(averages).map((average, index) => (
      <p key={labels[index]}>
        <strong>{labels[index]} =</strong> {average} / 10
      </p>
    ));
  }

  const total = Object.values(averages)
    .reduce((acc, val) => acc + parseFloat(val), 0)
    .toFixed(1);

  return (
    <div>
      <dc.Button onClick={() => setGeneration((gen) => gen + 1)}>
        Refresh
      </dc.Button>
      <div ref={ref}></div>
      <div>{renderAveragesList(averages, labels)}</div>
      <p>
        <strong>Total =</strong> {total} / 100
      </p>
    </div>
  );
}

return { IdealWheelOfLifeChart, PeriodicReviewWheelOfLifeChart };

return function View() {
  const content = `
    \`\`\`chart
    type: polarArea
    labels: [Body, Mind, Soul, Mission, Money, Growth, Romance, Family, Friends, Joy]
    series:
      - title: 
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    tension: 0.2
    width: 80%
    labelColors: true
    fill: true
    beginAtZero: true
    rMax: 10 p
    bestFit: false
    bestFitTitle: undefined
    bestFitNumber: 0
    legendPosition: right
  \`\`\`
  `;
  console.log("content", content);
  const data = {
    mark: 6,
    test: "hi",
  };
  // return <dc.Markdown content={content}/>
  const chartData = {
    type: "bar",
    data: {
      labels: ["One"],
      datasets: [
        {
          label: "Grades",
          data: [1],
          backgroundColor: ["rgba(255, 99, 132, 0.2)"],
          borderColor: ["rgiba(255, 99, 132, 1)"],
          borderWidth: 1,
        },
      ],
    },
  };
  window.renderChart(chartData, this.container);
  return null;
};
