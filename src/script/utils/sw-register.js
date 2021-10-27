/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */

/* eslint-disable eol-last */
/* eslint-disable import/extensions */

import runtime from 'serviceworker-webpack-plugin/lib/runtime';

const swRegister = async () => {
    if ('serviceWorker' in navigator) {
        await runtime.register();
        return;
    }
    console.log('Service worker not supported in this browser');
};

export default swRegister;