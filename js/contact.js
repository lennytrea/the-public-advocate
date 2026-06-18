document.addEventListener("DOMContentLoaded", function () {
  // Find the contact form on the page
  const briefForm = document.querySelector("form");
  const formAlert = document.getElementById("formAlert");

  if (briefForm) {
    briefForm.addEventListener("submit", function (event) {
      // 1. Stop the page from refreshing automatically
      event.preventDefault();

      // 2. Grab the name the user typed in
      const nameInput = briefForm.querySelector('input[type="text"]');
      const userName = nameInput ? nameInput.value.trim() : "there";

      // 3. Customize and reveal the Bootstrap alert banner
      if (formAlert) {
        formAlert.innerHTML = `Thanks for reaching out, ${userName}! We've received your message and our team will get back to you shortly.`;
        formAlert.classList.remove("d-none");
      }

      // 4. Wipe the form fields clean
      briefForm.reset();
    });
  }
});
