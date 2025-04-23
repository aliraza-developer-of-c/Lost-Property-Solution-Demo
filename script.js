document.addEventListener('DOMContentLoaded', function () {
  // Load header
  fetch('header.html')
    .then(response => response.text())
    .then(data => {
      const headerContainer = document.getElementById('header');
      if (headerContainer) {
        headerContainer.innerHTML = data;
        initMobileMenu(); // 🔧 Initialize menu after header is injected
      }
    });

  // Load footer
  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      const footerContainer = document.getElementById('footer');
      if (footerContainer) {
        footerContainer.innerHTML = data;
      }
    });

  // Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      if (this.getAttribute("href") === "#") return;

      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth"
        });

        const nav = document.querySelector("nav");
        nav?.classList.remove("active");
      }
    });
  });

  // Sticky Header on Scroll
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (header) {
      if (window.scrollY > 100) {
        header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.2)";
      } else {
        header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
      }

      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }
  });

  // FAQ toggle
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      question.classList.toggle('active');
      const answer = question.nextElementSibling;
      if (answer) answer.classList.toggle('show');
    });
  });
});

function initMobileMenu() {
  const mobileMenu = document.querySelector(".mobile-menu");
  const nav = document.querySelector("nav");

  if (mobileMenu && nav) {
    mobileMenu.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }
}
