export default function menuMobile() {
  const headerContainer = document.querySelector('header');
  const menuHamburguerBtn = document.querySelector('#nav button');
  const eventos = ['click', 'touchstart'];

  function toggleMenu(e) {
    if (e.type === 'touchstart') e.preventDefault();
    headerContainer.classList.toggle('ativo');
    const active = headerContainer.classList.contains('ativo');
    e.currentTarget.setAttribute('aria-expanded', active);
    if (active) e.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  }
  if (menuHamburguerBtn) {
    eventos.forEach((e) => {
      menuHamburguerBtn.addEventListener(e, toggleMenu);
    });
  }
}
