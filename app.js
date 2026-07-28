// Cleaned and safer JS for simple interactions
document.addEventListener('DOMContentLoaded', function () {
  console.log("Lois Tasty Masa — script loaded");

  // Basic demo variables (kept from original, cleaned)
  const traineeName = "Zuzu";

  function greetUser(name = '') {
    const who = name || traineeName;
    alert("Good morning " + who + "!");
  }

  // Expose to inline handlers if needed (button onmouseenter in HTML could call this)
  window.greetuser = greetUser;

  // Attach handler to message button if present
  const messageBtn = document.getElementById("messageBtn");
  if (messageBtn) {
    messageBtn.addEventListener("click", function () {
      alert("Button clicked — hello!");
    });
  }

  // Contact form basic handling (demonstration only)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      // Simple validation (required attributes on inputs already)
      const name = contactForm.name.value.trim();
      const phone = contactForm.phone.value.trim();
      const message = contactForm.message.value.trim();

      if (!name || !phone || !message) {
        alert('Please complete all fields before sending.');
        return;
      }

      // In a real site: send data to server or open mail client.
      alert('Thanks, ' + name + '! We received your message and will contact you soon.');
      contactForm.reset();
    });
  }
});
