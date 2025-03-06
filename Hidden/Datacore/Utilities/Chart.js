function renderWheelOfLifeChart({ container, labels, data, colors }) {
  const borderColors = colors.map((color) =>
    color.replace(/[\d\.]+\)$/g, "1)")
  );
  const chartData = {
    type: "polarArea",
    labelColors: true,
    tension: true,
    width: "80%",
    beginAtZero: true,
    rMin: 2,
    rMax: 10,
    bestFit: false,
    bestFitTitle: undefined,
    bestFitNumber: 0,
    legendPosition: "right",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Rating",
          data: data,
          backgroundColor: colors,
          borderColor: borderColors,
          borderWidth: 1,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          position: "right",
        },
      },
      scales: {
        r: {
          grid: {
            color: "rgba(255, 255, 255, 0.1)",
          },
          ticks: {
            color: "rgba(0,0,0)",
          },
          min: 0,
          max: 10,
        },
      },
    },
  };
  window.renderChart(chartData, container);
}

return { renderWheelOfLifeChart };
