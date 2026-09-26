// ===============================
// TEAM PORTFOLIO — HOME PAGE
// ===============================

// Smooth navigation for internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });

});


// ===============================
// NAVBAR SCROLL EFFECT
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


// ===============================
// BUTTON HOVER EFFECT
// ===============================

const buttons = document.querySelectorAll(
    ".primary-btn, .secondary-btn, .collaborate-btn"
);

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {
        button.style.transition = "0.3s ease";
    });

});