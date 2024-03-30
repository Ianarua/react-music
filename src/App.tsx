import React, { Suspense } from 'react';
import { Link, useRoutes } from 'react-router-dom';
import routes from './router';
import Header from 'src/components/header';
import Footer from '@/components/footer';

function App () {
    return (
        <div className="App">
            <Header/>
            <Suspense fallback="loading...">
                <div className="main">{ useRoutes(routes) }</div>
            </Suspense>
            <Footer/>
        </div>
    );
}

export default App;