export default function menuScrolled() {
  const header = document.querySelector('header');
  const logo = document.querySelector('header #logo');

  function ativarMenuScrolled() {
    if (window.pageYOffset > 24) {
      header.classList.add('scrolled');
      logo.setAttribute('src', './img/Logo-azul.svg');
    } else {
      header.classList.remove('scrolled');
      logo.setAttribute('src', './img/Logo.svg');
    }
  }
  window.addEventListener('scroll', ativarMenuScrolled);
}
