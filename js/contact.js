document.addEventListener("DOMContentLoaded", function () {
  const briefForm = document.querySelector("form");
  const formAlert = document.getElementById("formAlert");

  if (briefForm) {
    briefForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Stop page reload

      // Reveal the beautiful Bootstrap alert on the page
      if (formAlert) {
        formAlert.classList.remove("d-none");
      }

      briefForm.reset(); // Clear the text fields
    });
  }
});
