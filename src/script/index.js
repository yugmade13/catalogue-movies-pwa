/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */

/* eslint-disable eol-last */
/* eslint-disable import/extensions */

import 'regenerator-runtime';
import '../style/style.css';
import '../style/responsive.css';
import App from './views/app.js';
import swRegister from './utils/sw-register';
import WebsocketInitiator from './utils/websocket-initiator';
import CONFIG from './globals/config';

const app = new App({
    button: document.querySelector('#hamburgerButton'),
    drawer: document.querySelector('#navigationDrawer'),
    content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
    WebsocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});