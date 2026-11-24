'use strict';

/*
 * Progressive enhancement only. The page is fully readable without this file:
 * nothing here hides content or gates visibility.
 */

(function () {
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');
  const links = Array.from(document.querySelectorAll('.nav__link'));

  if (!nav || !toggle) return;

  /* ----- Header style on scroll ----- */
  function updateScrolledState() {
    nav.classList.toggle('nav--scrolled', window.scrollY > 24);
  }
  updateScrolledState();
  window.addEventListener('scroll', updateScrolledState, { passive: true });

  /* ----- Mobile menu ----- */
  function setMenu(open) {
    nav.classList.toggle('nav--open', open);
    toggle.setAttribute('aria-expanded', String(open));
  }

  toggle.addEventListener('click', function () {
    setMenu(!nav.classList.contains('nav--open'));
  });

  // Close after choosing a section link (in-page navigation).
  links.forEach(function (link) {
    link.addEventListener('click', function () {
      setMenu(false);
    });
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && nav.classList.contains('nav--open')) {
      setMenu(false);
      toggle.focus();
    }
  });

  document.addEventListener('click', function (event) {
    if (nav.classList.contains('nav--open') && !nav.contains(event.target)) {
      setMenu(false);
    }
  });

  // Reset the menu if the viewport grows past the mobile breakpoint.
  window.matchMedia('(min-width: 961px)').addEventListener('change', function (event) {
    if (event.matches) setMenu(false);
  });

  /* ----- Active section highlight ----- */
  const sections = Array.from(document.querySelectorAll('main > section[id]'));

  function setActive(id) {
    links.forEach(function (link) {
      const isActive = link.getAttribute('data-section') === id;
      link.classList.toggle('active', isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'true');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  if ('IntersectionObserver' in window && sections.length) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }
})();
