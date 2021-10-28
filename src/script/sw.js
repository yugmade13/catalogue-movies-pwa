/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */

/* eslint-disable eol-last */
/* eslint-disable import/extensions */
/* eslint-disable no-restricted-globals */

import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

const { assets } = global.serviceWorkerOption;

self.addEventListener('install', (event) => {
    event.waitUntil(CacheHelper.cachingAppShell([...assets, './']));

    // TODO: Caching App Shell Resource
});

self.addEventListener('activate', (event) => {
    event.waitUntil(CacheHelper.deleteOldCache());

    // TODO: Delete old caches
});

self.addEventListener('fetch', (event) => {
    event.respondWith(CacheHelper.revalidateCache(event.request));

    // TODO: Add/get fetch request to/from caches
});