
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


/* Sets the navigation button as active when in the corresponding section */
function updateActiveNavLink() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("#navigation a");
  
    let current = "";
  
    sections.forEach(section => {
        const sectionTop = section.offsetTop;

        if (scrollY >= sectionTop - 50) {
            current = section.getAttribute("id");
        }
    });
  
    navLinks.forEach(link => {
        link.classList.remove("active");
        
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
};


window.addEventListener("load", updateActiveNavLink);
window.addEventListener("scroll", updateActiveNavLink);