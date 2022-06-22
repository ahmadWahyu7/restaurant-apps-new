import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import './components/app-bar';
import './components/footer-restaurant';

import App from './views/app';
import swRegister from './utils/sw-register';

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  button: document.querySelector('.hamburger-icon'),
  drawer: document.querySelector('.menu-bar'),
  content: document.querySelector('main'),
  close: document.querySelector('.close-icon'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
