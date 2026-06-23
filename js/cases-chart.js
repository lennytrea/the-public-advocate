/**
 * Initializer for Choge Advocates Transaction Allocation Graph bcases.html
 */
document.addEventListener("DOMContentLoaded", function () {
  const chartCanvas = document.getElementById("mattersDoughnutChart");

  if (chartCanvas) {
    const ctx = chartCanvas.getContext("2d");
    new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: [
          "Corporate & Capital",
          "FinTech",
          "Infrastructure",
          "General Corporate",
        ],
        datasets: [
          {
            label: "Portfolio Allocation ($ Millions)",
            data: [450, 400, 200, 150],
            //colours for chart segments
            backgroundColor: [
              "#1a365d", // Corporate Deep Blue
              "#d4af37", // Gold Accent
              "#2c3e50", // Slate Grey
              "#a0aec0", // Muted Silver
            ],
            borderWidth: 2,
            borderColor: "#ffffff",
            hoverOffset: 6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              boxWidth: 12,
              padding: 15,
              font: {
                size: 11,
                weight: "500",
              },
            },
          },
        },
      },
    });
  }
});
