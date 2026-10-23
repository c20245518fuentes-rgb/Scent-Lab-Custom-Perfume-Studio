
"use strict";

// Select page elements.
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const menuToggle = document.getElementById("menu-toggle");
const menuIcon = document.getElementById("menu-icon");
const mobileNav = document.getElementById("mobile-nav");
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");
const yearElement = document.getElementById("current-year");

const root = document.documentElement;

// Update the theme button to match the active theme.
function updateThemeButton() {
  const isDark = root.classList.contains("dark");

  if (themeIcon) {
    themeIcon.textContent = isDark ? "☀" : "☾";
  }

  if (themeToggle) {
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute(
      "aria-label",
      isDark ? "Switch to light mode" : "Switch to dark mode"
    );
  }
}

// Apply a theme and save the user's preference.
function setTheme(theme) {
  const isDark = theme === "dark";

  root.classList.toggle("dark", isDark);

  try {
    localStorage.setItem("scent-lab-theme", theme);
  } catch (error) {
    // The theme still works for the current page if storage is unavailable.
  }

  updateThemeButton();
}

// Switch between light and dark themes.
if (themeToggle) {
  updateThemeButton();

  themeToggle.addEventListener("click", () => {
    const isDark = root.classList.contains("dark");
    setTheme(isDark ? "light" : "dark");
  });
}

// Open or close the mobile navigation menu.
function setMobileMenu(isOpen) {
  if (!mobileNav || !menuToggle || !menuIcon) {
    return;
  }

  mobileNav.classList.toggle("hidden", !isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuIcon.textContent = isOpen ? "✕" : "☰";
}

if (menuToggle && mobileNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    setMobileMenu(!isOpen);
  });

  // Close the menu after a navigation link is selected.
  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      setMobileMenu(false);
    });
  });

  // Close the menu when the Escape key is pressed.
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMobileMenu(false);
    }
  });

  // Close the mobile menu when switching to desktop layout.
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) {
      setMobileMenu(false);
    }
  });
}

// Display the current year in the footer.
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Keep the contact form as a front-end demonstration.
if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    formStatus.textContent =
      "Thanks for your interest! This demo form is not connected to a server.";
  });
}
