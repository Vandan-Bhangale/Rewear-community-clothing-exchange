document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("swapChart").getContext("2d");

  const swapChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [{
        label: "Swaps",
        data: [2, 5, 3, 6, 8, 10],
        backgroundColor: [
          "#0081a7",
          "#00afb9",
          "#fdfcdc",
          "#fed9b7",
          "#f07167",
          "#00afb9"
        ],
        borderRadius: 5
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 2
          }
        }
      }
    }
  });
});