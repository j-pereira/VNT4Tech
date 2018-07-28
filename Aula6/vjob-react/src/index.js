import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/navigation/Loading/Loading.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';

axios.defaults.baseURL = 'https://vjobs-app.herokuapp.com/';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
