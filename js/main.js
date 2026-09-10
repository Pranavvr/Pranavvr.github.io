/* Portfolio behavior: theme toggle, scroll reveal, nav border. ~50 lines, no deps. */
(function () {
  'use strict';

  var root = document.documentElement;

  /* ---- theme toggle (initial value is set inline in <head>) ---- */
  var toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      localStorage.setItem('theme', next);
    });
  }

  /* Follow the OS only while the visitor hasn't picked a theme themselves. */
  window.matchMedia('(prefers-color-scheme: light)')
    .addEventListener('change', function (e) {
      if (!localStorage.getItem('theme')) {
        root.dataset.theme = e.matches ? 'light' : 'dark';
      }
    });

  /* ---- reveal sections as they scroll in ---- */
  var items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, i) {
        if (!entry.isIntersecting) return;
        // Slight stagger so a group of cards cascades instead of popping at once.
        setTimeout(function () { entry.target.classList.add('in'); }, i * 55);
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    items.forEach(function (el) { io.observe(el); });
  }

  /* ---- hairline under the nav once the page has scrolled ---- */
  var nav = document.querySelector('.nav');
  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      nav.classList.toggle('scrolled', window.scrollY > 8);
      ticking = false;
    });
  }, { passive: true });

  /* ---- footer year ---- */
  document.getElementById('year').textContent = new Date().getFullYear();
})();
