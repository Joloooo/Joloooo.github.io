document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'phillipprice' && password === '123456') {
        window.location.href = 'phillipprice/phillipprice.html'; // Redirect to Phillip Price's page
    } else if (username === 'tyrellwellick' && password === 'loveme1') {
        window.location.href = 'tyrellwellick/tyrellwellick.html'; // Redirect to Phillip Price's page
        // You can redirect to another page or perform any other action here
    } else {
        const errorMessage = document.getElementById('error-message');
        errorMessage.style.display = 'block';
    }
});
