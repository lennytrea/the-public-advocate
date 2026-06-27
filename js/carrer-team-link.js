document.addEventListener("DOMContentLoaded", function () {
  // 1. Initialize Popovers
  const popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]'),
  );
  popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });

  //Route Checker & Highlighter
  const urlParams = new URLSearchParams(window.location.search);
  const targetRole = urlParams.get("role");
  if (targetRole) {
    // Defines mapping for accordion items and modals
    const routes = {
      fintech: { accordion: "collapseOne", modal: "applyFintechModal" },
      infrastructure: {
        accordion: "collapseTwo",
        modal: "applyInfrastructureModal",
      },
      pupilage: { accordion: "collapseThree", modal: "applyPupilageModal" },
    };

    const target = routes[targetRole];

    if (target) {
      // Auto-expand the accordion row
      const accordionEl = document.getElementById(target.accordion);
      if (accordionEl) {
        const bsCollapse = new bootstrap.Collapse(accordionEl, {
          toggle: false,
        });
        bsCollapse.show();

        // Highlight and scroll to the accordion item nicely
        const accordionItem = accordionEl.closest(".accordion-item");
        if (accordionItem) {
          accordionItem.style.transition = "background-color 0.5s ease";
          accordionItem.style.backgroundColor = "#f4fcf7";

          setTimeout(() => {
            accordionItem.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }, 100);
        }
      }
    }
  }
});
