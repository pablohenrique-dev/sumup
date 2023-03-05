import menuMobile from './modules/menuMobile.js';
import faq from './modules/faq.js';
import menuScrolled from './modules/menuScrolled.js';
import linkAtivo from './modules/linkAtivo.js';

menuMobile();
faq();
menuScrolled();
linkAtivo();

AOS.init({
  duration: 1000,
  offset: 400,
  once: true,
  easing: 'ease',
});
