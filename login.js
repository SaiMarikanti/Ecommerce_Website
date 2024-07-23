document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const loginErrorMessage = document.getElementById('login-error-message');

    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.email === email && user.password === password) {
        alert('Login successful! Redirecting to dashboard...');
        window.location.href = 'dashboard.html';
    } else {
        loginErrorMessage.textContent = "Invalid email or password.";
    }
});
document.getElementById('signupButton').addEventListener('click', function() {
    window.location.href = 'signup.html';
});
