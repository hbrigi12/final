// Smooth scroll to portfolio on homepage
document.addEventListener("DOMContentLoaded", function () {
  const viewBtn = document.getElementById("viewBtn");

  if (viewBtn) {
    viewBtn.addEventListener("click", function (event) {
      if (window.location.pathname.includes("index.html")) {
        event.preventDefault();
        window.location.href = "portfolio.html";
      }
    });
  }

  // Contact form validation
  const contactForm = document.querySelector(".contact-form form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert("Please fill in all fields before submitting.");
        return;
      }

      // Simulate success message
      alert("Message sent successfully! Thank you.");
      contactForm.reset();
    });
  }
});
