function showMessage() {
  const box = document.getElementById("message");
  box.classList.remove("hidden");
  box.innerHTML =
    "&#9989; Deployment successful &mdash; CI/CD pipeline is running perfectly!";
}
