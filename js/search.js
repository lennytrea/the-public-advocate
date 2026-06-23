document.addEventListener("DOMContentLoaded", function () {
  const roleButtons = document.querySelectorAll(".filter-role-btn");
  const fieldButtons = document.querySelectorAll(".filter-field-btn");
  const teamCards = document.querySelectorAll(".team-item");

  // Track the current active filter values
  let activeRole = "all";
  let activeField = "all";

  // 1. HANDLE SENIORITY LEVEL BUTTON CLICKS
  roleButtons.forEach((button) => {
    button.addEventListener("click", function () {
      roleButtons.forEach((btn) =>
        btn.classList.remove("btn-success", "active"),
      );
      roleButtons.forEach((btn) => btn.classList.add("btn-outline-dark"));

      this.classList.remove("btn-outline-dark");
      this.classList.add("btn-success", "active");

      activeRole = this.getAttribute("data-filter-role");
      applyDualFilter();
    });
  });

  // 2. HANDLE PRACTICE FIELD BUTTON CLICKS
  fieldButtons.forEach((button) => {
    button.addEventListener("click", function () {
      fieldButtons.forEach((btn) =>
        btn.classList.remove("btn-success", "active"),
      );
      fieldButtons.forEach((btn) => btn.classList.add("btn-outline-dark"));

      this.classList.remove("btn-outline-dark");
      this.classList.add("btn-success", "active");

      activeField = this.getAttribute("data-filter-field");
      applyDualFilter();
    });
  });

  // 3. THE function that applies both filters to the team cards
  function applyDualFilter() {
    teamCards.forEach((card) => {
      const cardRole = card.getAttribute("data-role");
      const cardField = card.getAttribute("data-field");

      // Condition A: card match the selected role row?
      const matchRole = activeRole === "all" || cardRole === activeRole;

      // Condition B: card match the selected practice field row?
      const matchField = activeField === "all" || cardField === activeField;

      // If BOTH, the display the card. Otherwise, hide it.
      if (matchRole && matchField) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }
});
