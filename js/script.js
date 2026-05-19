// ==========================================
// SMOOTH SCROLLING & ACTIVE NAV HIGHLIGHT
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        updateActiveNav();
      }
    }
  });
});

function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === current) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateActiveNav);

// ==========================================
// MOBILE MENU TOGGLE
// ==========================================
function setupMobileMenu() {
  const nav = document.querySelector('nav');
  const navLinks = document.querySelector('.nav-links');
  
  // Tạo hamburger button
  if (!document.querySelector('.hamburger')) {
    const hamburger = document.createElement('button');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = '☰';
    hamburger.setAttribute('aria-label', 'Toggle menu');
    nav.appendChild(hamburger);
    
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
      hamburger.classList.toggle('active');
    });
    
    // Đóng menu khi click vào link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
        hamburger.classList.remove('active');
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', setupMobileMenu);

// ==========================================
// SCROLL ANIMATIONS (Fade-in)
// ==========================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-visible');
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
  // Add animation classes to elements
  document.querySelectorAll('section, .project-card, .tool-item').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
});

// ==========================================
// FORM VALIDATION (Email)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  const emailLink = document.querySelector('a[href^="mailto:"]');
  if (emailLink) {
    emailLink.addEventListener('click', function(e) {
      const email = this.getAttribute('href').replace('mailto:', '');
      if (!validateEmail(email)) {
        e.preventDefault();
        alert('Email không hợp lệ');
      }
    });
  }
});

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// ==========================================
// SCROLL-TO-TOP BUTTON
// ==========================================
function setupScrollToTop() {
  const scrollBtn = document.createElement('button');
  scrollBtn.className = 'scroll-to-top';
  scrollBtn.innerHTML = '↑';
  scrollBtn.setAttribute('aria-label', 'Scroll to top');
  document.body.appendChild(scrollBtn);
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  });
  
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

document.addEventListener('DOMContentLoaded', setupScrollToTop);
