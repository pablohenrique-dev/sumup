import debounce from './debounce.js';

export default function menuScrolled() {
  const heroSection = document.querySelector('#hero');
  const logo = document.querySelector('header #logo');

  function ativarMenuScrolled() {
    if (window.pageYOffset > 64) {
      heroSection.classList.add('scrolled');
      logo.setAttribute('src', './img/Logo-azul.svg');
    } else {
      heroSection.classList.remove('scrolled');
      logo.setAttribute('src', './img/Logo.svg');
    }
  }
  window.addEventListener('scroll', debounce(ativarMenuScrolled, 10));
}
