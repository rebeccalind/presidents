var chartFour = new Chart(document.getElementById("doughnut-chart-four"), {
    type: 'doughnut',
    data: {
      labels: ["Female", "Male"],
      datasets: [
        {
            backgroundColor: ["blue", "white"],
            borderColor: ["blue", "white"],
            fontFamily: ["Muli"],
            fontColor: ["white"],
            data: [3,33]
        }
      ]
    },
});
