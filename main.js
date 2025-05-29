// Smooth scroll to target section
// Smooth scroll to target section
function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

// Form validation
function validateContactForm(e) {
  var form = document.getElementById("contactForm");
  var name = form.name.value.trim();
  var email = form.email.value.trim();
  var message = form.message.value.trim();
  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    e.preventDefault();
  }
}

// Dark mode toggle
function toggleDarkMode() {
  const html = document.documentElement;
  const isDark = html.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");

  // Change icon
  const icon = document.querySelector("#darkModeToggle i");
  if (icon) {
    icon.className = isDark ? "fas fa-sun" : "fas fa-moon";
  }
}

// Apply theme from storage on load
(function () {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
})();

// Attach event listeners on DOM load
window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", validateContactForm);
  }

  const darkToggle = document.getElementById("darkModeToggle");
  if (darkToggle) {
    darkToggle.addEventListener("click", toggleDarkMode);
  }

  // Typing effect on load
  const typingElement = document.getElementById("typingText");
  const text = "DigitalBoost";
  let typingIndex = 0;

  function typeEffect() {
    if (typingIndex <= text.length) {
      typingElement.innerText = text.slice(0, typingIndex++);
      setTimeout(typeEffect, 100);
    }
  }

  typingElement.innerText = "";
  typeEffect();

  // Looping hero typing
  const phrases = [
    "Skyrocket Your Business with Smart Digital Marketing",
    "Grow Online with Our Proven Marketing Strategies",
    "Reach Your Audience with the Power of SEO & Ads",
  ];

  let i = 0;
  let j = 0;
  let currentPhrase = [];
  let isDeleting = false;
  let isEnd = false;

  const heroTyping = document.getElementById("heroTyping");

  function loopTyping() {
    isEnd = false;
    heroTyping.innerHTML = currentPhrase.join("");

    if (i < phrases.length) {
      if (!isDeleting && j <= phrases[i].length) {
        currentPhrase.push(phrases[i][j]);
        j++;
        heroTyping.innerHTML = currentPhrase.join("");
      }

      if (isDeleting && j <= phrases[i].length) {
        currentPhrase.pop();
        j--;
        heroTyping.innerHTML = currentPhrase.join("");
      }

      if (j === phrases[i].length) {
        isEnd = true;
        isDeleting = true;
      }

      if (isDeleting && j === 0) {
        currentPhrase = [];
        isDeleting = false;
        i++;
        if (i === phrases.length) i = 0;
      }
    }

    const speed = isEnd ? 2000 : isDeleting ? 40 : 100;
    setTimeout(loopTyping, speed);
  }

  loopTyping();
});

// Initialize AOS (Animate On Scroll) library

document.addEventListener("DOMContentLoaded", () => {
  AOS.init();
});
