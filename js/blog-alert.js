document
  .getElementById("insightSubmissionForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // /**/Prevents page from jumping or reloading

    const emailVal = document.getElementById("contributorEmail").value;
    const alertPlaceholder = document.getElementById("formStatusPlaceholder");

    // Injecting a Bootstrap alert inline at the top of the modal window
    alertPlaceholder.innerHTML = `
      <div class="alert alert-success alert-dismissible fade show border-0 shadow-sm mb-4" role="alert">
        <h5 class="alert-heading fw-bold small text-uppercase mb-1">Dossier Safely Received</h5>
        <p class="small mb-0">Your proposal is logged. An editorial panel will review it against compliance metrics. A status brief will be dispatched to <strong>${emailVal}</strong> upon publication activation.</p>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    `;

    // Clears out form values for clean state
    event.target.reset();
  });

// Target the newsletter form node
const newsletterForm = document.querySelector("form.row.g-2");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Kill browser page reload

    // Hide the input row smoothly
    this.style.display = "none";

    // Unhide and boot up response container
    const statusBox = document.getElementById("newsletterStatusContainer");
    if (statusBox) {
      statusBox.style.display = "block";
    }

    // Reset the fields internally
    this.reset();
  });
}
