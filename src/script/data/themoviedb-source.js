/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */

/* eslint-disable eol-last */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-extra-semi */

import API_ENDPOINT from '../globals/api-endpoint';

class TheMovieDbSource {
    static async nowPlayingMovie() {
        const response = await fetch(API_ENDPOINT.NOW_PLAYING);
        const responseJson = await response.json();
        return responseJson.results;
    }

    static async upComingMovie() {
        const response = await fetch(API_ENDPOINT.UPCOMING);
        const responseJson = await response.json();
        return responseJson.results;
    }

    static async detailMovie(id) {
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        return response.json();
    }
};

export default TheMovieDbSource;