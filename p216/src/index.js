import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import blue_sky from './img/blue_sky.png';
import bombes from './img/bombes.png';
import caisse from './img/caisse.png';
import burger from './img/burger.png';
import phone from './img/phone.png';
import ride from './img/ride.png';
import dinner from './img/dinner.png';
import toy from './img/toy.png';

const ReactGA = require('react-ga');
ReactGA.initialize('UA-104523856-1');

const tracks = [
	{
		url  : 'https://s3.eu-central-1.amazonaws.com/pack-de-16/11_je_ne_comprends_pas.mp3',
		title: 'Je ne comprends pas',
		feat : '#packde16',
		avatar: burger
	},
	{
		url: 'https://s3.eu-central-1.amazonaws.com/pack-de-16/pack_de_nyls.mp3',
		title: 'Pack de Nyls',
		feat: 'Nyls',
		avatar: ride
	},
	{
		url: 'https://s3.eu-central-1.amazonaws.com/pack-de-16/pack_de_nyls.mp3',
		title: 'Pack de Nyls',
		feat: 'Jeser',
		avatar: toy
	}
];

const listOfImages = [blue_sky, bombes, caisse, burger, phone, ride, dinner, toy];

ReactDOM.render(<App tracks={tracks} listOfImages={listOfImages} />, document.getElementById('root'));
registerServiceWorker();
