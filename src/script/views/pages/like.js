/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */

import FavoriteMoviewIdb from '../../data/favoritemovie-idb';
import { createMovieItemTemplate } from '../templates/template-creator';

const Like = {
    async render() {
        return `
            <div class="content">
                <h2 class="content__heading">Your Liked Movie</h2>
                <div id="movies" class="movies">
 
                </div>
            </div>
        `;
    },

    async afterRender() {
        const movies = await FavoriteMoviewIdb.getAllMovies();
        const movieContainer = document.querySelector('#movies');
        movies.forEach((movie) => {
            movieContainer.innerHTML += createMovieItemTemplate(movie);
        });
    },
};

export default Like;