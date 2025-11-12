document.addEventListener("DOMContentLoaded", () => {
  const modalContainer = document.getElementById("serviceModals");

  const services = [
    { title: "Web Design", img: "./Images/design imagge.jpeg", desc: "We create visually appealing, mobile-friendly websites that reflect your brand’s identity." },
    { title: "Web Development", img: "./Images/web image.png", desc: "Robust, secure, and scalable websites powered by the latest web technologies." },
    { title: "App Development", img: "./Images/app image.jpg", desc: "Custom mobile apps for Android and iOS with smooth user experience." },
    { title: "SEO Optimization", img: "./Images/seo image.jpg", desc: "Increase your search rankings and reach your target audience effectively." },
    { title: "Digital Marketing", img: "./Images/digital image.png", desc: "We boost your brand visibility through tailored marketing strategies." },
    { title: "Graphic Design", img: "./Images/graphic image.jpg", desc: "Creative designs that communicate your brand story beautifully." },
    { title: "E-commerce Solutions", img: "./Images/e comm image.jpg", desc: "End-to-end online store solutions with secure payments and tracking." },
    { title: "Cloud Services", img: "./Images/cloud image.webp", desc: "Migrate and manage your infrastructure securely on the cloud." },
    { title: "AI Solutions", img: "./Images/AI image.png", desc: "Integrate smart AI tools to automate workflows and improve decisions." },
    { title: "Data Analytics", img: "./Images/data image.jpeg", desc: "Turn data into actionable insights with our analytics solutions." },
    { title: "Cyber Security", img: "./Images/Cybersecurity image.webp", desc: "Protect sensitive data with multi-layered cybersecurity defenses." },
    { title: "Content Writing", img: "./Images/content-writing-2.png", desc: "Professional, SEO-optimized content to attract and engage your audience." },
    { title: "Social Media Management", img: "./Images/social image.png", desc: "Grow your social presence with creative and consistent campaigns." },
    { title: "Corporate Training", img: "./Images/training image.png", desc: "Train your workforce in modern digital tools and strategies." },
    { title: "24/7 Support", img: "./Images/support image.png", desc: "Round-the-clock support to keep your operations running smoothly." },
  ];

  // Generate all modals
  modalContainer.innerHTML = services
    .map(
      (s, i) => `
      <div class="modal" id="modal${i + 1}">
        <div class="modal-content">
          <span class="close-btn" data-close="${i + 1}">&times;</span>
          <img src="${s.img}" alt="${s.title}" />
          <h2>${s.title}</h2>
          <p>${s.desc}</p>
          <button class="quote-btn">Get Quote / Enroll</button>
        </div>
      </div>`
    )
    .join("");

  // Open modals
  document.querySelectorAll(".learn-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = e.target.closest(".service-card").dataset.modal;
      document.getElementById(`modal${index}`).style.display = "flex";
    });
  });

  // Close modals
  document.querySelectorAll(".close-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = e.target.dataset.close;
      document.getElementById(`modal${id}`).style.display = "none";
    });
  });

  // Close when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
      e.target.style.display = "none";
    }
  });
});
