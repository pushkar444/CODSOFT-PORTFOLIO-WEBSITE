// Small bits of interactivity. Nothing fancy on purpose.

// current year in the footer
document.getElementById('year').textContent = new Date().getFullYear();

// mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');

menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', open);
});

// close the menu after tapping a link on mobile
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuBtn.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  });
});

// fade sections in as they come into view
const sections = document.querySelectorAll('.section');
sections.forEach(s => s.classList.add('reveal'));

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

sections.forEach(s => io.observe(s));
