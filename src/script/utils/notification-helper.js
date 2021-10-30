/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */

/* eslint-disable eol-last */
/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */

const NotificationHelper = {
    sendNotification({ title, option }) {
        if (!this._checkAvailability) {
            console.log('Notification not supported in this browser');
            return;
        }

        if (!this._checkPermission) {
            console.log('User did not yet granted permission');
            this._requestPermission();
            return;
        }

        this._showNotification({ title, option });
    },

    _checkAvailability() {
        return !!('notification' in window);
    },

    _checkPermission() {
        return Notification.permission === 'granted';
    },

    async _requestPermission() {
        const status = await Notification.requestPermission();

        if (status === 'denied') {
            console.log('Notification Danied');
        }

        if (status === 'default') {
            console.log('Permission closed');
        }
    },

    async _showNotification({ title, option }) {
        const serviceWorkerRegistration = await navigator.serviceWorker.ready;
        serviceWorkerRegistration.showNotification(title, option);
    },
};

export default NotificationHelper;