const xValues = [];
const yValues = [];
generateData("2*x", 0, 10, 0.5);

new Chart("chart1.2", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      pointRadius: 1,
      borderColor: "rgba(255,0,0,1)",
      data: yValues
    }]
  },
  options: {
  scales: {
    x: {
      title: {
        display: true,
        text: 'value of t'
      },
      min: 0,
      max: 10
    },
    y: {
      title: {
        display: true,
        text: 'p(t)'
      },
      min: 0,
      max: 10
    }
  },
  responsive: true,
  maintainAspectRatio: true
}
});

function generateData(expression, start, stop, step = 1) {
    for (let x = start; x <= stop; x += step) {
      yValues.push(eval(expression));
      xValues.push(x);
    }
  }