import 'tw-elements';
import './styles/main.scss';

import App from './scripts/App';

const registerScreenEl = document.getElementById('register-screen');
const loginScreenEl = document.getElementById('login-screen');
const registerLinkEl = document.getElementById('register-link');

registerLinkEl.addEventListener('click', () => {
  loginScreenEl.style.display = 'none';
  registerScreenEl.style.display = 'flex';
})


const app = new App();