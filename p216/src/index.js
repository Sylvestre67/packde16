import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const ReactGA = require('react-ga');
ReactGA.initialize('UA-104523856-1');

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
