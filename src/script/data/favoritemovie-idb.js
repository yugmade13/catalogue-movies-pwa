/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */

/* eslint-disable eol-last */
/* eslint-disable no-underscore-dangle */

import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
    upgrade(database) {
        database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
    },
});

const FavoriteMoviewIdb = {
    async getMovie(id) {
        return (await dbPromise).get(OBJECT_STORE_NAME, id);
    },

    async getAllMovies() {
        return (await dbPromise).getAll(OBJECT_STORE_NAME);
    },

    async putMovie(movie) {
        return (await dbPromise).put(OBJECT_STORE_NAME, movie);
    },

    async deleteMovie(id) {
        return (await dbPromise).delete(OBJECT_STORE_NAME, id);
    },
};

export default FavoriteMoviewIdb;