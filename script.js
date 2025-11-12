
// ===== Carousel Functionality =====
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots");

let currentIndex = 0;
let autoSlideInterval;

// Create dot indicators dynamically
slides.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => showSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

// Function to show slides
function showSlide(index) {
  slides.forEach((s, i) => s.classList.toggle("active", i === index));
  dots.forEach((d, i) => d.classList.toggle("active", i === index));
  currentIndex = index;
}

// Next / Previous buttons
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

// Event Listeners for buttons
nextBtn.addEventListener("click", () => {
  nextSlide();
  resetAutoSlide();
});

prevBtn.addEventListener("click", () => {
  prevSlide();
  resetAutoSlide();
});

// Auto slide every 5 seconds
function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 5000);
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}

startAutoSlide();


// ===== Hamburger Menu =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => navLinks.classList.toggle('active'));
// Counter Animation
const counters = document.querySelectorAll('.counter');
const speed = 200; // Adjust speed (lower = faster)

const startCounter = () => {
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 15);
      } else {
        counter.innerText = target + '+';
      }
    };
    updateCount();
  });
};

// Start animation when section is visible
let counterStarted = false;
window.addEventListener('scroll', () => {
  const section = document.querySelector('.counter-section');
  const sectionTop = section.offsetTop - window.innerHeight + 100;

  if (!counterStarted && window.scrollY > sectionTop) {
    startCounter();
    counterStarted = true;
  }
});
// ===== Dynamic Counter Animation =====
const counter = document.querySelectorAll(".counter");
const spee = 100; // lower = faster

const animateCounters = () => {
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 40);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
};

// Run animation when section enters the viewport
const counterSection = document.querySelector(".counter-section");
const observer = new IntersectionObserver(
  entries => {
    if (entries[0].isIntersecting) {
      animateCounters();
      observer.unobserve(counterSection); // Run only once
    }
  },
  { threshold: 0.5 }
);

observer.observe(counterSection);


// Auto year
document.getElementById("year").textContent = new Date().getFullYear();

// Newsletter subscribe effect
const form = document.getElementById("newsletterForm");
const emailInput = document.getElementById("newsletterEmail");
const message = document.getElementById("subscribeMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();

  if (email === "" || !email.includes("@")) {
    message.textContent = "❌ Please enter a valid email address.";
    message.style.color = "#ff5252";
  } else {
    message.textContent = "✅ Subscribed successfully!";
    message.style.color = "#00e676";
    emailInput.value = "";
  }

  message.classList.add("show");

  // Hide message after 3 seconds
  setTimeout(() => {
    message.classList.remove("show");
  }, 3000);
});
