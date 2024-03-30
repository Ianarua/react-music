import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import 'normalize.css';
import '@/assests/css/index.less';

import App from '@/App';
import store from '@/store';
import theme from '@/assests/theme';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={ store }>
        <ThemeProvider theme={ theme }>
            <HashRouter>
                {/*<React.StrictMode>*/ }
                <App/>
                {/*</React.StrictMode>*/ }
            </HashRouter>
        </ThemeProvider>
    </Provider>
);
