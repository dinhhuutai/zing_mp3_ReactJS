import config from '~/config';


import Home from '~/pages/Home';
import Mymusic from '~/pages/Mymusic';
import Zingchart from '~/pages/Zingchart';
import Radio from '~/pages/Radio';
import Follow from '~/pages/Follow';
import Newrelease from '~/pages/Newrelease';
import Hub from '~/pages/Hub';
import Top100 from '~/pages/Top100';
import CategoryMV from '~/pages/CategoryMV';


const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.mymusic,
        component: Mymusic,
    },
    {
        path: config.routes.zingchart,
        component: Zingchart,
    },
    {
        path: config.routes.radio,
        component: Radio,
    },
    {
        path: config.routes.follow,
        component: Follow,
    },
    {
        path: config.routes.newrelease,
        component: Newrelease,
    },
    {
        path: config.routes.hub,
        component: Hub,
    },
    {
        path: config.routes.top100,
        component: Top100,
    },
    {
        path: config.routes.categorymv,
        component: CategoryMV,
    },
];


const privateRoutes = [];


export {publicRoutes, privateRoutes};
