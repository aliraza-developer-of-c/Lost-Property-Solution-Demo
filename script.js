document.addEventListener('DOMContentLoaded', function() {
    // Load header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
            // Initialize mobile menu after header is loaded
            initMobileMenu();
        });

    // Load footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });
});




 // Smooth Scrolling for Anchor Links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function (e) {
         e.preventDefault();

         if (this.getAttribute('href') === '#') return;

         const target = document.querySelector(this.getAttribute('href'));
         if (target) {
             window.scrollTo({
                 top: target.offsetTop - 80,
                 behavior: 'smooth'
             });

             // Close mobile menu if open
             nav.classList.remove('active');
         }
     });
 });

 // Sticky Header on Scroll
 window.addEventListener('scroll', () => {
     const header = document.querySelector('header');
     if (window.scrollY > 100) {
         header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
     } else {
         header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
     }
 });




 window.addEventListener('scroll', function () {
     const header = document.querySelector('header');
     if (window.scrollY > 50) {
         header.classList.add('scrolled');
     } else {
         header.classList.remove('scrolled');
     }
 });

 // FAQ toggle
 const faqQuestions = document.querySelectorAll('.faq-question');
 faqQuestions.forEach(question => {
     question.addEventListener('click', () => {
         question.classList.toggle('active');
         const answer = question.nextElementSibling;
         answer.classList.toggle('show');
     });
 });


// Mobile Menu Toggle
const mobileMenu = document.querySelector(".mobile-menu");
const nav = document.querySelector("nav");

mobileMenu.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    if (this.getAttribute("href") === "#") return;

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });

      // Close mobile menu if open
      nav.classList.remove("active");
    }
  });
});

// Sticky Header on Scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.2)";
  } else {
    header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  }
});

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});





