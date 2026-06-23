document.addEventListener("DOMContentLoaded", function () {
  // Grab all buttons and all 11 individual card wrappers
  const filterButtons = document.querySelectorAll(".filter-btn");
  const teamCards = document.querySelectorAll(".team-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // 1. Clear active button styling across the bar
      filterButtons.forEach((btn) => {
        btn.classList.remove("btn-success", "active");
        btn.classList.add("btn-outline-dark");
      });

      // 2. Apply focus state to the clicked button
      this.classList.remove("btn-outline-dark");
      this.classList.add("btn-success", "active");

      // 3. Extract filter target keyword
      const targetFilter = this.getAttribute("data-filter");

      // 4. Evaluate card wrapper against keyword
      teamCards.forEach((card) => {
        const cardRole = card.getAttribute("data-role");

        // Show the element if 'all' is active, or if the role token matches perfectly
        if (targetFilter === "all" || cardRole === targetFilter) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});
