/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */

import CONFIG from '../globals/config';
import NotificationHelper from './notification-helper';

/* eslint-disable eol-last */
/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */

const WebsocketInitiator = {
    init(url) {
        const websocket = new WebSocket(url);
        websocket.onmessage = this._onMessageHandler;
    },

    _onMessageHandler(message) {
        const movie = JSON.parse(message.data);
        NotificationHelper.sendNotification({
            title: `${movie.title} is on cinema!`,
            option: {
                body: movie.overview,
                image: `${CONFIG.BASE_IMAGE_URL + movie.poster_path}`,
            },
        });
    },
};

export default WebsocketInitiator;