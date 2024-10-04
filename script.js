// Hamburger menu toggle
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
}

// Login modal functionality
function openLogin() {
    document.getElementById('loginModal').style.display = 'block';
}

function closeLogin() {
    document.getElementById('loginModal').style.display = 'none';
}
// Function to close the modal
function closeAuth() {
    document.getElementById('authModal').style.display = 'none';
}

// Function to show the registration form
function showRegister() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
    document.getElementById('modalTitle').innerText = 'Register';
}

// Function to handle login form submission
function handleLogin(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('username').value; // Get username
    const password = document.getElementById('password').value; // Get password

    // Send data to the server
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Specify content type
        },
        body: JSON.stringify({ username, password }) // Convert data to JSON
    })
    .then(response => response.json()) // Parse JSON response
    .then(data => {
        if (data.success) {
            // Successful login
            alert('Login successful!');
            window.location.href = 'dashboard.html'; // Redirect to another page
        } else {
            // Failed login
            alert('Login failed: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
}

// Function to handle registration form submission
function handleRegister(event) {
    event.preventDefault(); // Prevent the default form submission

    const regUsername = document.getElementById('regUsername').value; // Get username
    const regPassword = document.getElementById('regPassword').value; // Get password

    // Send data to the server
    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Specify content type
        },
        body: JSON.stringify({ username: regUsername, password: regPassword }) // Convert data to JSON
    })
    .then(response => response.json()) // Parse JSON response
    .then(data => {
        const registerMessage = document.getElementById('registerMessage');
        registerMessage.style.display = 'block';
        
        if (data.success) {
            registerMessage.innerText = 'Registration successful! You can now log in.';
            document.getElementById('loginForm').style.display = 'block';
            document.getElementById('registerForm').style.display = 'none';
            document.getElementById('modalTitle').innerText = 'Login';
        } else {
            registerMessage.innerText = 'Registration failed: ' + data.message;
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
}
