// name Konnar Cahill
// File. script.js
// date 12/20/20



// Hamburger menu function

function hamburger () {
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}