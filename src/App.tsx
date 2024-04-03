import React, { Suspense, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './router';
import Header from 'src/components/header';
import Footer from '@/components/footer';
import { fetchCurrentSongAction } from '@/views/player/store/player';
import { useAppDispatch } from '@/store';
import AppPlayerBar from '@/views/player/app-player-bar';

function App () {
    // 获取某一首喜欢的歌曲
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchCurrentSongAction(1842025914));
    }, []);

    return (
        <div className="App">
            <Header/>
            <Suspense fallback="loading...">
                <div className="main">{ useRoutes(routes) }</div>
            </Suspense>
            <Footer/>

            <AppPlayerBar/>
        </div>
    );
}

export default App;