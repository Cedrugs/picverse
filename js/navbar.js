const hamburger = document.getElementById("HamburgerNav");
const navLinks = document.getElementById("Hamburger-Nav-Container");

hamburger.addEventListener('click', () => {
    navLinks.style = "display: flex;"
});

window.addEventListener('click', (event) => {
    if (event.target !== hamburger) {
        navLinks.style = "display: none;"
    }
});

const navbar = document.getElementById("Navbars-Container"); 
window.addEventListener("scroll", () => {
    if (window.scrollY > 600) {
        navLinks.classList.add("scrolled");
        navbar.classList.add("scrolled");
    } else {
        navLinks.classList.remove("scrolled");
        navbar.classList.remove("scrolled");
    }
});