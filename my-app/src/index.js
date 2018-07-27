import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UserDelete from './UserDelete';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './AppRouter';

ReactDOM.render( <BrowserRouter>
    <AppRouter />
    </BrowserRouter>, document.getElementById('root'));



{/* <BrowserRouter>
<AppRouter />
</BrowserRouter> */}


registerServiceWorker();
