// Select all button nodes
document.querySelectorAll(".db-trigger-link").forEach((button) => {
  button.addEventListener("click", function () {
    // Pull the custom data attribute out of the targeted element
    const articleTitle = this.getAttribute("data-article");

    // Inject the data attribute into the Toast warning text
    document.getElementById("targetArticleName").textContent =
      `"${articleTitle}"`;

    //Bootstrap Toast node
    const toastElement = document.getElementById("dbErrorToast");
    const bootstrapToast = bootstrap.Toast.getOrCreateInstance(toastElement, {
      delay: 4500, // Keeps notification visible on screen for 4.5 seconds
    });

    bootstrapToast.show();
  });
});
