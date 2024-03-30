import { Navigate, RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const Discover = lazy(() => import('@/views/discover'));
const Recommend = lazy(() => import('@/views/discover/child-pages/recommend'));
const Artist = lazy(() => import('@/views/discover/child-pages/artist'));
const Album = lazy(() => import('@/views/discover/child-pages/album'));
const Djradio = lazy(() => import('@/views/discover/child-pages/djradio'));
const Songs = lazy(() => import('@/views/discover/child-pages/songs'));
const Ranking = lazy(() => import('@/views/discover/child-pages/ranking'));


const Mine = lazy(() => import('@/views/mine'));
const Focus = lazy(() => import('@/views/focus'));
const Download = lazy(() => import('@/views/download'));


const routes: RouteObject[] = [
    {
        path: '/',
        element: <Navigate to="/discover"/>
    },
    {
        path: '/discover',
        element: <Discover/>,
        children: [
            {
                path: '/discover',
                element: <Navigate to="/discover/recommend"/>
            },
            {
                path: '/discover/recommend',
                element: <Recommend/>
            },
            {
                path: '/discover/album',
                element: <Album/>
            },
            {
                path: '/discover/artist',
                element: <Artist/>
            },
            {
                path: '/discover/djradio',
                element: <Djradio/>
            },
            {
                path: '/discover/ranking',
                element: <Ranking/>
            },
            {
                path: '/discover/songs',
                element: <Songs/>
            }
        ]
    },
    {
        path: '/mine',
        element: <Mine/>
    },
    {
        path: '/focus',
        element: <Focus/>
    },
    {
        path: '/download',
        element: <Download/>
    }
];


export default routes;
