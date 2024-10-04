function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("show"); // Toggle the "show" class
}

function openLogin() {
  const loginModal = document.getElementById("loginModal");
  loginModal.style.display = "block"; // Show the login modal
}

function closeLogin() {
  const loginModal = document.getElementById("loginModal");
  loginModal.style.display = "none"; // Hide the login modal
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
  const loginModal = document.getElementById("loginModal");
  if (event.target == loginModal) {
      loginModal.style.display = "none";
  }
}
