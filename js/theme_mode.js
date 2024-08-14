/*Create a dark mode and light theme*/

// Dark mode

function darkMode() {
    const element = document.body;
    element.classList.toggle("dark-mode");
}

// Light mode

function lightMode() {
    const element = document.body;
    element.classList.toggle("light-mode");
}

//create a button to switch between dark and light mode

document.getElementById("dark-mode").addEventListener("click", darkMode);
document.getElementById("light-mode").addEventListener("click", lightMode);