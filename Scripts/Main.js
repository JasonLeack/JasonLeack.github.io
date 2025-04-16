
/* --- NAVIGATION --- */
function toggleNavMenu() {
    const nav = document.getElementById("navigation");
    nav.classList.toggle("show");
}

function closeNavMenu() {
    document.getElementById("navigation").classList.remove("show");
}

function openNavMenu() {
    document.getElementById("navigation").classList.add("show");
}

/* Close the menu when the user clicks anything */
document.addEventListener("click", function(event) {
    const navigationOptions = document.getElementById("navigationOptions");
    
    if (!navigationOptions.contains(event.target)) {
        closeNavMenu();
    } 
});