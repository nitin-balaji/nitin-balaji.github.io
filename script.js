'use strict';

/* ===== Utility Helpers ===== */

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

function throttleRaf(callback) {
  let rafId = null;
  return function (...args) {
    if (rafId === null) {
      rafId = requestAnimationFrame(() => {
        callback.apply(this, args);
        rafId = null;
      });
    }
  };
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/* ===== 1. Page Fade In ===== */

function initPageFadeIn() {
  document.body.classList.add('is-loaded');
}

/* ===== 2. Navbar: Scroll Shrink & Active Link Tracking ===== */

function initNavbar() {
  const nav = $('#nav');
  const navLinks = $$('.nav__link');
  const sections = $$('main > section[id]');

  // Scroll shrink handler
  const handleScroll = throttleRaf(() => {
    const scrolled = window.scrollY > 40;
    nav.classList.toggle('nav--scrolled', scrolled);
  });

  window.addEventListener('scroll', handleScroll);

  // Active section tracking with IntersectionObserver
  const observerOptions = {
    root: null,
    rootMargin: '-40% 0px -50% 0px',
    threshold: 0,
  };

  const updateActiveLink = (sectionId) => {
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('data-section') === sectionId);
    });
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    let activeSection = null;

    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeSection = entry.target.id;
      }
    });

    if (activeSection) {
      updateActiveLink(activeSection);
    }
  }, observerOptions);

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });

  // Initialize active link on load
  updateActiveLink('home');
}

/* ===== 3. Mobile Menu Toggle ===== */

function initMobileMenu() {
  const navToggle = $('#navToggle');
  const nav = $('#nav');
  const navLinks = $$('.nav__link');

  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !isOpen);
    nav.classList.toggle('nav--open');
  });

  // Close menu on link click
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('nav--open');
    });
  });

  // Close menu on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      navToggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('nav--open');
    }
  });

  // Close menu on outside click
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target)) {
      navToggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('nav--open');
    }
  });
}

/* ===== 4. Smooth Scroll ===== */

function initSmoothScroll() {
  const navLinks = $$('.nav__link');
  const nav = $('#nav');

  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const target = $(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // Close mobile menu after navigation
          const navToggle = $('#navToggle');
          navToggle.setAttribute('aria-expanded', 'false');
          nav.classList.remove('nav--open');
        }
      }
    });
  });
}

/* ===== 5. Scroll Reveal (IntersectionObserver) ===== */

function initScrollReveal() {
  const revealElements = $$('[data-reveal]');

  if (prefersReducedMotion()) {
    revealElements.forEach((el) => {
      el.classList.add('is-visible');
    });
    return;
  }

  const observerOptions = {
    threshold: 0.15,
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach((el) => {
    revealObserver.observe(el);
  });
}

/* ===== 6. Animated Stat Counters ===== */

function initCounters() {
  const counters = $$('[data-count]');

  if (prefersReducedMotion()) {
    counters.forEach((counter) => {
      const count = parseInt(counter.getAttribute('data-count'), 10);
      const suffix = counter.getAttribute('data-suffix') || '';
      const numberEl = counter.querySelector('.stat__number');
      numberEl.textContent = count + suffix;
    });
    return;
  }

  const observerOptions = {
    threshold: 0.5,
  };

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const targetCount = parseInt(counter.getAttribute('data-count'), 10);
        const suffix = counter.getAttribute('data-suffix') || '';
        const numberEl = counter.querySelector('.stat__number');

        let currentCount = 0;
        const duration = 1200;
        const startTime = performance.now();

        const animate = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);

          // Easing function (ease-out cubic)
          const eased = 1 - Math.pow(1 - progress, 3);
          currentCount = Math.floor(eased * targetCount);

          numberEl.textContent = currentCount + (progress === 1 ? suffix : '');

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
        counterObserver.unobserve(counter);
      }
    });
  }, observerOptions);

  counters.forEach((counter) => {
    counterObserver.observe(counter);
  });
}

/* ===== 8. Scroll Progress Bar ===== */

function initProgressBar() {
  const progressBar = $('#progressBar');

  const handleScroll = throttleRaf(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    progressBar.style.width = Math.min(scrolled, 100) + '%';
  });

  window.addEventListener('scroll', handleScroll);
}

/* ===== 9. Back to Top Button ===== */

function initBackToTop() {
  const backToTopButton = $('#backToTop');

  const handleScroll = throttleRaf(() => {
    const isVisible = window.scrollY > 500;
    if (isVisible) {
      backToTopButton.removeAttribute('hidden');
    } else {
      backToTopButton.setAttribute('hidden', '');
    }
  });

  window.addEventListener('scroll', handleScroll);

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}

/* ===== 10. Image Fallbacks ===== */

function initImageFallbacks() {
  $$('img').forEach((img) => {
    img.addEventListener('error', () => {
      const parent = img.parentElement;
      if (parent) {
        parent.classList.add('img-missing');
      }
    });
  });
}

/* ===== 11. Project Card Image Gallery ===== */

function initProjectGallery() {
  const galleries = $$('[data-gallery-id]');

  galleries.forEach((gallery) => {
    const galleryId = gallery.getAttribute('data-gallery-id');
    const img = gallery.querySelector('img');
    const prevBtn = gallery.querySelector('.project-card__prev');
    const nextBtn = gallery.querySelector('.project-card__next');
    const currentSpan = gallery.querySelector('.project-card__current');
    const totalSpan = gallery.querySelector('.project-card__total');

    // Get total images from data attribute or default to 1
    let totalImages = parseInt(gallery.getAttribute('data-total-images')) || 1;

    let currentIndex = 1;

    // Update total
    if (totalSpan) totalSpan.textContent = totalImages;

    if (prevBtn && nextBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        currentIndex = currentIndex > 1 ? currentIndex - 1 : totalImages;
        updateGalleryImage();
      });

      nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        currentIndex = currentIndex < totalImages ? currentIndex + 1 : 1;
        updateGalleryImage();
      });
    }

    function updateGalleryImage() {
      const baseName = img.src.replace(/(-\d+)?\.(jpg|jpeg|png)$/i, '');
      const extension = img.src.match(/\.(jpg|jpeg|png)$/i)[0];

      const newSrc = totalImages > 1
        ? `${baseName}${currentIndex}${extension}`
        : baseName + extension;

      img.src = newSrc;
      if (currentSpan) currentSpan.textContent = currentIndex;
    }
  });
}

/* ===== Bootstrap ===== */

document.addEventListener('DOMContentLoaded', () => {
  initPageFadeIn();
  initNavbar();
  initMobileMenu();
  initSmoothScroll();
  initScrollReveal();
  initCounters();
  initProgressBar();
  initBackToTop();
  initImageFallbacks();
  initProjectGallery();
});
