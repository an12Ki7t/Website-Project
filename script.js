// ===== Carousel Functionality =====
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.createElement('div');
dotsContainer.classList.add('dots');
document.querySelector('.carousel').appendChild(dotsContainer);

let currentIndex = 0;

// Create dot indicators dynamically
slides.forEach((_, index) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (index === 0) dot.classList.add('active');
  dot.addEventListener('click', () => showSlide(index));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

// Show slide by index
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
  currentIndex = index;
}

// Next and Previous buttons
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);

// Optional: Add arrow buttons (if not already in HTML)
const prevBtn = document.createElement('a');
prevBtn.classList.add('prev');
prevBtn.innerHTML = '&#10094;';
prevBtn.addEventListener('click', prevSlide);

const nextBtn = document.createElement('a');
nextBtn.classList.add('next');
nextBtn.innerHTML = '&#10095;';
nextBtn.addEventListener('click', nextSlide);

document.querySelector('.carousel').appendChild(prevBtn);
document.querySelector('.carousel').appendChild(nextBtn);

// ===== Hamburger Menu =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
document.getElementById("year").textContent = new Date().getFullYear();
// Services Page
// Footer Year Auto Update
document.getElementById("year").textContent = new Date().getFullYear();
