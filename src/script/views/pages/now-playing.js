/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */

import TheMovieDbSource from '../../data/themoviedb-source';
import { createMovieItemTemplate } from '../templates/template-creator';

const NowPlaying = {
    async render() {
        return `
            <div class="content">
                <h2 class="content__heading">Now Playing in Cinema</h2>
                <div id="movies" class="movies"></div>
            </div>
        `;
    },

    // eslint-disable-next-line no-empty-function
    async afterRender() {
        // fungsi ini akan dipanggil setelah render
        const movies = await TheMovieDbSource.nowPlayingMovie();
        const movieContainer = document.querySelector('#movies');
        movies.forEach((movie) => {
            movieContainer.innerHTML += createMovieItemTemplate(movie);
        });
    },
};

export default NowPlaying;