var chartThree = new Chart(document.getElementById("doughnut-chart-three"), {
    type: 'doughnut',
    data: {
      labels: ["Female", "Male"],
      datasets: [
        {
            backgroundColor: ["blue", "white"],
            borderColor: ["blue", "white"],
            fontFamily: ["Muli"],
            fontColor: ["white"],
            data: [0,33]
        }
      ]
    },
});
