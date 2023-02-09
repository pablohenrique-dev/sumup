import debounce from './debounce.js';

export default function linkAtivo() {
  const sections = document.querySelectorAll('.section-link');
  const linksMenu = document.querySelectorAll('.header-menu a');

  function ativarLink(index) {
    linksMenu.forEach((link) => link.classList.remove('ativo'));
    linksMenu[index].classList.add('ativo');
  }

  function checkScroll() {
    sections.forEach((section, index) => {
      if (section.getBoundingClientRect().top <= 150) ativarLink(index);
    });
  }

  if (sections) {
    window.addEventListener('scroll', debounce(checkScroll, 100));
  }
}
