var chartTwo = new Chart(document.getElementById("doughnut-chart-two"), {
    type: 'doughnut',
    data: {
      labels: ["Female", "Male"],
      datasets: [
        {
            backgroundColor: ["blue", "white"],
            borderColor: ["blue", "white"],
            fontFamily: ["Muli"],
            fontColor: ["white"],
            data: [2,52]
        }
      ]
    },
});