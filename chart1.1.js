let xValues1p1 = [];
let yValues1p1 = [];
generateData("2", 0, 10, 0.5);

new Chart("chart1.1", {
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
        text: 'value of P'
      },
      min: 0,
      max: 10
    },
    y: {
      title: {
        display: true,
        text: 'dP/dt'
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
	xValues1p1 = [];
	yValues1p1 = [];
  for (let x = start; x <= stop; x += step) {
    yValues1p1.push(eval(expression));
    xValues1p1.push(x);
  }
}