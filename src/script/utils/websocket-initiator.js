/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */

/* eslint-disable eol-last */
/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */

const WebsocketInitiator = {
    init(url) {
        const websocket = new WebSocket(url);
        websocket.onmessage = this._onMessageHandler;
    },

    _onMessageHandler(message) {
        console.log(message.data);
    },
};

export default WebsocketInitiator;