'use strict';
/* DOM ELEMENTS SELECTION */
const homes = document.querySelectorAll('.home');
const thePriorSection = document.querySelector('.prior');
const contactFormSection = document.querySelector('.contact__section');
const contactForm = document.querySelector('.contain');
const homesContainer = document.getElementById('homess');
const contactFormHeader = document.querySelector('.form__header');

const revealHomes = entries => {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    homes.forEach(el => {
      el.classList.add('lift');
    });
  }
};
const priorSectionObserver = new IntersectionObserver(revealHomes, {
  root: null,
  threshold: 0.7,
});

priorSectionObserver.observe(thePriorSection);

const revealContactForm = entries => {
  const [entry] = entries;
  if (entry.isIntersecting) {
    contactFormHeader.classList.add('lift');
    contactForm.style.transform = 'translateY(0)';
  }
};
const HomesSectionObserver = new IntersectionObserver(revealContactForm, {
  root: null,
  threshold: 0.2,
});

HomesSectionObserver.observe(contactFormSection);
