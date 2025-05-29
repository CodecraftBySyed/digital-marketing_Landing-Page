// scroll-animations.js
// Custom scroll-triggered animations for sections and elements

document.addEventListener("DOMContentLoaded", function() {
  // Initialize AOS if it exists
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      mirror: true
    });
  }

  // Custom scroll animations
  const animatedElements = document.querySelectorAll("[data-scroll]");

  function handleScroll() {
    const triggerBottom = window.innerHeight * 0.8; // Trigger earlier (80% of viewport)
    
    animatedElements.forEach(el => {
      const boxTop = el.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        el.classList.add("scroll-in-view");
      } else {
        // Only remove if it's above the viewport to prevent elements from disappearing when scrolling up
        if (boxTop > window.innerHeight) {
          el.classList.remove("scroll-in-view");
        }
      }
    });
  }

  // Add initial class to prevent flash of unstyled content
  animatedElements.forEach(el => {
    el.classList.add("pre-animation");
    // Small timeout to ensure CSS transitions work properly
    setTimeout(() => {
      el.classList.remove("pre-animation");
    }, 100);
  });

  window.addEventListener("scroll", handleScroll);
  // Initial check
  setTimeout(handleScroll, 200); // Slight delay for better initial loading
});

// Add the following CSS to your stylesheet for fade/slide effect:
// [data-scroll] { opacity: 0; transform: translateY(40px); transition: opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1); }
// .scroll-in-view { opacity: 1; transform: none; }