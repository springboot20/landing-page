const barIcon = document.querySelector('#bars-icon'),
  closeIcon = document.querySelector('#close-icon'),
  mobileMenu = document.querySelector('#mobile-menu');

barIcon.addEventListener('click', () => {
  barIcon.classList.replace('inline-flex', 'hidden');
  closeIcon.classList.replace('hidden', 'inline-flex');

  mobileMenu.classList.replace('hidden', 'block');
});

closeIcon.addEventListener('click', () => {
  closeIcon.classList.replace('inline-flex', 'hidden');
  barIcon.classList.replace('hidden', 'inline-flex');
  mobileMenu.classList.replace('block', 'hidden');
});
