/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */

/* eslint-disable eol-last */

/* eslint-disable no-underscore-dangle */

const UrlParser = {
    parseActiveUrlWithCombiner() {
        const url = window.location.hash.slice(1).toLowerCase();
        const splitedUrl = this._urlSplitter(url);
        return this._urlCombiner(splitedUrl);
    },

    parseActiveUrlWithoutCombiner() {
        const url = window.location.hash.slice(1).toLocaleLowerCase();
        return this._urlSplitter(url);
    },

    _urlSplitter(url) {
        const urlSplits = url.split('/');
        return {
            resource: urlSplits[1] || null,
            id: urlSplits[2] || null,
            verb: urlSplits[3] || null,
        };
    },

    _urlCombiner(splitedUrl) {
        return (splitedUrl.resource ? `/${splitedUrl.resource}` : '/')
        + (splitedUrl.id ? '/:id' : '')
        + (splitedUrl.verb ? `/${splitedUrl.verb}` : '');
    },
};

export default UrlParser;