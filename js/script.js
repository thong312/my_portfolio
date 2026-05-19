// ==========================================
// SMOOTH SCROLL PROGRESS INDICATOR
// ==========================================
function setupScrollIndicator() {
  const indicator = document.createElement('div');
  indicator.className = 'scroll-progress-bar';
  document.body.appendChild(indicator);
  
  window.addEventListener('scroll', () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / scrollHeight) * 100;
    indicator.style.width = scrolled + '%';
  });
}

// ==========================================
// PARALLAX HERO EFFECT
// ==========================================
function setupParallax() {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    hero.style.transform = `translateY(${scrollPosition * 0.5}px)`;
  });
}

// ==========================================
// TYPING ANIMATION FOR HERO TITLE
// ==========================================
function setupTypingAnimation() {
  const heroTitle = document.querySelector('.hero h1');
  if (!heroTitle) return;
  
  const originalText = heroTitle.innerHTML;
  heroTitle.innerHTML = '';
  
  const fullText = 'Building <em>AI-native</em><br>product experiences';
  let index = 0;
  const speed = 50;
  
  function type() {
    if (index < fullText.length) {
      heroTitle.innerHTML = fullText.substring(0, index + 1);
      index++;
      setTimeout(type, speed);
    }
  }
  
  // Start typing after page load
  window.addEventListener('load', () => {
    setTimeout(type, 300);
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
    const current = Math.floor(start + (target - start) * progress);
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
        animateCounter(entry.target, num);
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
  document.querySelectorAll('section, .project-card, .tool-item, .skill-card, .about-stat').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
});

// ==========================================
// STAGGER ANIMATIONS FOR CARDS
// ==========================================
function setupStaggerAnimations() {
  const projectCards = document.querySelectorAll('.project-card');
  const skillCards = document.querySelectorAll('.skill-card');
  
  projectCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
  });
  
  skillCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.05}s`;
  });
}

document.addEventListener('DOMContentLoaded', setupStaggerAnimations);

// ==========================================
// ENHANCED HOVER EFFECTS FOR CARDS
// ==========================================
function setupCardHovers() {
  const projectCards = document.querySelectorAll('.project-card');
  const skillCards = document.querySelectorAll('.skill-card');
  
  [projectCards, skillCards].forEach(cards => {
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px) scale(1.01)';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', setupCardHovers);

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

// ==========================================
// MOUSE TRACKING FOR HERO
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
  setupParallax();
  setupTypingAnimation();
  setupCounterAnimation();
  setupMouseTracking();
});
