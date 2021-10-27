/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */

/* eslint-disable eol-last */
/* eslint-disable import/extensions */
/* eslint-disable no-restricted-globals */

self.addEventListener('install', (event) => {
    console.log('Install Service Worker..');

    // TODO: Caching App Shell Resource
});

self.addEventListener('activate', (event) => {
    console.log('Activate Service Worker..');

    // TODO: Delete old caches
});

self.addEventListener('fetch', (event) => {
    console.log(event.request);

    event.respondWith(fetch(event.request));
    // TODO: Add/get fetch request to/from caches
});