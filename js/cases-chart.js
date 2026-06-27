/**
 * Initializer for Choge Advocates Transaction Allocation Graph cases.html
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
            // 🌟 Updated to match your actual brand style identities!
            backgroundColor: [
              "#0a192f", // Brand Navy
              "#13331c", // Brand Dark Forest Green
              "#bfa15f", // A muted Gold/Cream Accent for chart contrast
              "#cbd5e1", // Light Slate Silver
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
                family: "'Plus Jakarta Sans', 'Segoe UI', sans-serif",
              },
            },
          },
        },
      },
    });
  }
});
