let xValues1p2 = [];
let yValues1p2 = [];
generateData("2*x", 0, 10, 0.5);

new Chart("chart1.2", {
  type: "line",
  data: {
    labels: xValues1p2,
    datasets: [{
      fill: false,
      pointRadius: 1,
      borderColor: "rgba(255,0,0,1)",
      data: yValues1p2
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
    xValues1p2 = [];
	yValues1p2 = [];
    for (let x = start; x <= stop; x += step) {
      yValues1p2.push(eval(expression));
      xValues1p2.push(x);
    }
  }