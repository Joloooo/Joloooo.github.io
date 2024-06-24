document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate an HTTP request by using a fetch call to a non-existent endpoint
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => {
        // Simulate response
        if (username === 'phillipprice' && password === '123456') {
            return { success: true, user: 'phillipprice' };
        } else if (username === 'tyrellwellick' && password === 'loveme1') {
            return { success: true, user: 'tyrellwellick' };
        } else {
            return { success: false };
        }
    })
    .then(data => {
        if (data.success) {
            if (data.user === 'phillipprice') {
                window.location.href = 'phillipprice/phillipprice.html';
            } else if (data.user === 'tyrellwellick') {
                window.location.href = 'tyrellwellick/tyrellwellick.html';
            }
        } else {
            const errorMessage = document.getElementById('error-message');
            errorMessage.style.display = 'block';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        const errorMessage = document.getElementById('error-message');
        errorMessage.style.display = 'block';
    });
});
