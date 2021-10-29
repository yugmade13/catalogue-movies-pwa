/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */

/* eslint-disable eol-last */

/* eslint-disable no-underscore-dangle */

import NowPlaying from '../views/pages/now-playing';
import Upcoming from '../views/pages/upcoming';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
    '/': NowPlaying, // default page
    '/now-playing': NowPlaying,
    '/upcoming': Upcoming,
    '/detail/:id': Detail,
    '/like': Like,
};

export default routes;