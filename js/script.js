// ==========================================
// SMOOTH SCROLL PROGRESS INDICATOR
// ==========================================
function setupScrollIndicator() {
  const indicator = document.createElement('div');
  indicator.className = 'scroll-progress-bar';
  document.body.appendChild(indicator);
  
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / scrollHeight) * 100;
        indicator.style.width = scrolled + '%';
        ticking = false;
      });
      ticking = true;
    }
  });
}

// ==========================================
// COUNTER ANIMATION FOR STATS
// ==========================================
function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const startTime = Date.now();
  
  function update() {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(start + (target - start) * eased);
    element.textContent = current + '+';
    
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  
  requestAnimationFrame(update);
}

function setupCounterAnimation() {
  const observerOptions = {
    threshold: 0.5
  };
  
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
        const num = parseInt(entry.target.textContent);
        if (!isNaN(num)) {
          animateCounter(entry.target, num);
        }
        entry.target.classList.add('counted');
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.about-stat-num').forEach(el => {
    counterObserver.observe(el);
  });
}

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
        // Close mobile menu if open
        const navLinks = document.querySelector('.nav-links');
        const hamburger = document.querySelector('.hamburger');
        if (navLinks) navLinks.classList.remove('mobile-open');
        if (hamburger) {
          hamburger.classList.remove('active');
          hamburger.innerHTML = '☰';
        }
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

let navTicking = false;
window.addEventListener('scroll', () => {
  if (!navTicking) {
    requestAnimationFrame(() => {
      updateActiveNav();
      navTicking = false;
    });
    navTicking = true;
  }
});

// ==========================================
// MOBILE MENU TOGGLE
// ==========================================
function setupMobileMenu() {
  const nav = document.querySelector('nav');
  const navLinks = document.querySelector('.nav-links');
  
  if (!document.querySelector('.hamburger')) {
    const hamburger = document.createElement('button');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = '☰';
    hamburger.setAttribute('aria-label', 'Toggle menu');
    nav.appendChild(hamburger);
    
    hamburger.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('mobile-open');
      hamburger.classList.toggle('active');
      hamburger.innerHTML = isOpen ? '✕' : '☰';
    });
    
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
        hamburger.classList.remove('active');
        hamburger.innerHTML = '☰';
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', setupMobileMenu);

// ==========================================
// SCROLL ANIMATIONS (Intersection Observer)
// ==========================================
function setupScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-visible');
        // Add stagger delay for grid children
        const parent = entry.target.parentElement;
        if (parent) {
          const siblings = Array.from(parent.children);
          const index = siblings.indexOf(entry.target);
          entry.target.style.transitionDelay = `${index * 0.08}s`;
        }
      }
    });
  }, observerOptions);

  // Apply to cards and items, NOT entire sections
  const targets = [
    '.project-card',
    '.tool-item',
    '.skill-card',
    '.about-stat',
    '.timeline-card',
    '.tech-card',
    '.achievement-card',
    '.mini-project'
  ];

  targets.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      el.classList.add('fade-in');
      observer.observe(el);
    });
  });
}

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
  
  let scrollTopTicking = false;
  window.addEventListener('scroll', () => {
    if (!scrollTopTicking) {
      requestAnimationFrame(() => {
        if (window.scrollY > 500) {
          scrollBtn.classList.add('visible');
        } else {
          scrollBtn.classList.remove('visible');
        }
        scrollTopTicking = false;
      });
      scrollTopTicking = true;
    }
  });
  
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ==========================================
// MOUSE TRACKING FOR HERO (subtle)
// ==========================================
function setupMouseTracking() {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  
  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    hero.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
  });
}

// ==========================================
// INITIALIZE ALL FEATURES ON PAGE LOAD
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  setupScrollIndicator();
  setupCounterAnimation();
  setupMouseTracking();
  setupScrollToTop();
  setupScrollAnimations();
});
