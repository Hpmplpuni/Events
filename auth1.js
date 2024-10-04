// Function to open the authentication modal
function openAuth() {
  document.getElementById('authModal').style.display = 'block'; // Show the modal
  document.getElementById('loginForm').style.display = 'block'; // Show the login form
  document.getElementById('registerForm').style.display = 'none'; // Hide the registration form
  document.getElementById('modalTitle').innerText = 'Login'; // Set the modal title
}

// Function to close the modal
function closeAuth() {
  document.getElementById('authModal').style.display = 'none'; // Hide the modal
}

// Function to show the registration form
function showRegister() {
  document.getElementById('loginForm').style.display = 'none'; // Hide the login form
  document.getElementById('registerForm').style.display = 'block'; // Show the registration form
  document.getElementById('modalTitle').innerText = 'Register'; // Change modal title
}

// Handle Login Function
function handleLogin(event) {
  event.preventDefault(); // Prevent the default form submission
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Add your login logic here (e.g., API call, validation)
  console.log('Login:', username, password);
  // Close modal or show success message after login
}

// Handle Registration Function
function handleRegister(event) {
  event.preventDefault(); // Prevent the default form submission
  const regUsername = document.getElementById('regUsername').value;
  const regPassword = document.getElementById('regPassword').value;

  // Add your registration logic here (e.g., API call, validation)
  console.log('Register:', regUsername, regPassword);
  // Show success message or close modal after registration
}

