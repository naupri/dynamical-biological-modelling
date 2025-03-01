function graph(expression, graphname) {
    let [xValues, yValues] = generateData(expression, 0, 10, 0.5);

    new Chart(document.getElementById(graphname), {
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
              text: 'fix later'
            },
            min: 0,
            max: 10
          },
          y: {
            title: {
              display: true,
              text: 'fix later'
            },
            min: 0,
            max: 10
          }
        },
        responsive: true,
        maintainAspectRatio: true
      }
      });
}

function generateData(expression, start, stop, step = 1) {
	let xValues = [];
	let yValues = [];
  for (let x = start; x <= stop; x += step) {
    yValues.push(eval(expression));
    xValues.push(x);
    return [xValues, yValue];
  }
}

window.graph = graph;