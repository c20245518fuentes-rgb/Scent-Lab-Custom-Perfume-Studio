
"use strict";

// Display the current year in the footer.
const yearElement = document.getElementById("current-year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Keep the contact form on the page for this static demo.
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    formStatus.textContent =
      "Thanks for your interest! This demo form is not connected to a server yet.";
  });
}
