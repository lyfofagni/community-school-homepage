// Mobile navigation toggle
const navToggle = document.querySelector(".nav__toggle");
const navLinks = document.querySelector(".nav__links");

if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("nav__links--open");
    });
}

// Smooth scroll enhancement (optional, browsers already smooth via CSS)
document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
        const targetId = link.getAttribute("href");
        const targetEl = document.querySelector(targetId);

        if (targetEl) {
            e.preventDefault();
            targetEl.scrollIntoView({ behavior: "smooth", block: "start" });

            // Close mobile menu after click
            navLinks.classList.remove("nav__links--open");
        }
    });
});

// Simple text size controls (A-, A, A+)
const buttons = document.querySelectorAll(".text-size-btn");
const root = document.documentElement;

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const size = btn.dataset.size;

        if (size === "small") {
            root.style.setProperty("--base-font-size", "15px");
        } else if (size === "medium") {
            root.style.setProperty("--base-font-size", "16px");
        } else if (size === "large") {
            root.style.setProperty("--base-font-size", "18px");
        }
    });
});
