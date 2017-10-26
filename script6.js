var chartSix = new Chart(document.getElementById("doughnut-chart-six"), {
    type: 'doughnut',
    data: {
      labels: ["Female", "Male"],
      datasets: [
        {
            backgroundColor: ["blue", "white"],
            borderColor: ["blue", "white"],
            fontFamily: ["Muli"],
            fontColor: ["white"],
            data: [1,25]
        }
      ]
    },
});
