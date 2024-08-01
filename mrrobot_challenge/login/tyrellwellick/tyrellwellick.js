document.getElementById('messages').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    const dropdown = document.getElementById('messageDropdown');
    dropdown.style.display = (dropdown.style.display === 'none' || dropdown.style.display === '') ? 'block' : 'none';
});

document.getElementById('secret').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    const dropdown = document.getElementById('secretDropdown');
    dropdown.style.display = (dropdown.style.display === 'none' || dropdown.style.display === '') ? 'block' : 'none';
});

document.getElementById('logout').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    window.location.href = '../login.html'; // Redirect to the login page
});
