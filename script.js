document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('error-message');

    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match.";
        return;
    }

    const user = {
        name: name,
        email: email,
        password: password
    };

    localStorage.setItem('user', JSON.stringify(user));

    alert('Sign-Up successful! Redirecting to login page...');
    window.location.href = 'login.html';
});
