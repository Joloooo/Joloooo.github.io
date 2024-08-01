const menuButton = document.querySelector('#menu');
const menuDropdown = document.querySelector('#menuDropdown');

const toggleMenu = (event) => {
    event.preventDefault(); // Prevent the default action
    event.stopPropagation(); // Prevent click from propagating to window

    // Toggle the dropdown visibility
    if (menuDropdown.style.display === "none" || menuDropdown.style.display === "") {
        menuDropdown.style.display = "block";
    } else {
        menuDropdown.style.display = "none";
    }
};

menuButton.addEventListener('click', toggleMenu);

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', (event) => {
    if (!menuButton.contains(event.target) && !menuDropdown.contains(event.target)) {
        if (menuDropdown.style.display === "block") {
            menuDropdown.style.display = "none";
        }
    }
});
