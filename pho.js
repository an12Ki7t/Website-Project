// Footer year auto-update
document.getElementById("year").textContent = new Date().getFullYear();

// Form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const msg = document.getElementById("formMessage");

  if (!name || !email || !message) {
    msg.textContent = "⚠️ Please fill all fields before submitting.";
    msg.style.color = "red";
    return;
  }

  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  if (!emailRegex.test(email)) {
    msg.textContent = "⚠️ Invalid email format.";
    msg.style.color = "red";
    return;
  }

  msg.textContent = "✅ Thank you! Your message has been sent successfully.";
  msg.style.color = "green";
  document.getElementById("contactForm").reset();
});
