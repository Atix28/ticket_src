import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { env } from './config';
import * as serviceWorker from './serviceWorker';
//require('dotenv').config()

ReactDOM.render(
    <BrowserRouter>
        <App env={env} />
    </BrowserRouter>
    , document.getElementById('root'));
serviceWorker.unregister();
