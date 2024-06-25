document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Create a JSON object for the login data
    const loginData = {
        username: username,
        password: password
    };

    // Replace with your deployed Firebase function URL
    const functionURL = 'https://us-central1-mrrobot-1d1d4.cloudfunctions.net/validateLogin';

    // Call the Firebase function
    fetch(functionURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            if (username === 'phillipprice') {
                window.location.href = 'phillipprice/phillipprice.html';
            } else if (username === 'tyrellwellick') {
                window.location.href = 'tyrellwellick/tyrellwellick.html';
            }
        } else {console.log(123)
            errorMessage.textContent = data.message;
            errorMessage.style.display = 'block';
            setTimeout(() => {
                errorMessage.style.display = 'none';
            }, 2000);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        errorMessage.textContent = 'An error occurred';
        errorMessage.style.display = 'block';
        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 2000);
    });
});
