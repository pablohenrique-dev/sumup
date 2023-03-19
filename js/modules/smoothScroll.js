export default function smoothScroll() {
  const menuMobileLinks = document.querySelectorAll(".links li a");
  const header = document.querySelector("header");

  const scrollToSection = (href) => {
    const section = document.querySelector(href);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (menuMobileLinks) {
    menuMobileLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        header.classList.remove("ativo");
        const href = link.getAttribute("href");
        scrollToSection(href);
      });
    });
  }
}
