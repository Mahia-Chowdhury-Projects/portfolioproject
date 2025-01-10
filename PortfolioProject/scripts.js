// Dark/Light Mode Toggle
let isDarkMode = false;
document.addEventListener('keydown', (e) => {
    if (e.key === "d" && e.ctrlKey) { // Ctrl + D to toggle mode
        document.body.classList.toggle('dark-mode');
        isDarkMode = !isDarkMode;
    }
});

// Login functionality for the website creator
document.getElementById('login-btn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "mc46@williams.edu" && password === "Cookies123!") {
        alert("Login Successful!");
        // You can add extra functionality here for logged-in users
    } else {
        alert("Invalid credentials");
    }
});
