// ===== Navbar Active Link Highlight =====
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop(); // get current file name
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach(link => {
    const linkPage = link.getAttribute("href").split("/").pop();
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
});

// ===== Mobile Menu Toggle =====
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  hamburger.classList.toggle("active");
});

// ===== Footer Year =====
document.getElementById("year").textContent = new Date().getFullYear();

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Slide-in animation on scroll
const boxes = document.querySelectorAll(".slide-in");

const showOnScroll = () => {
  const trigger = window.innerHeight * 0.85;
  boxes.forEach(box => {
    const top = box.getBoundingClientRect().top;
    if (top < trigger) {
      box.classList.add("show");
    }
  });
};

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);
// Scroll fade-in effect
const fadeElements = document.querySelectorAll(".fade-in");

function checkVisibility() {
  fadeElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", checkVisibility);
window.addEventListener("load", checkVisibility);