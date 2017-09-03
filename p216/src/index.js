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
		url  : 'https://s3.eu-central-1.amazonaws.com/pack-de-16/1.%23INTRODUCTION.mp3',
		title: 'JIntroduction',
		feat : '#packde16',
		avatar: burger
	},
	{
		url: 'https://s3.eu-central-1.amazonaws.com/pack-de-16/2.%23MAGUEULE.mp3',
		title: 'Ma Gueule',
		feat: 'Paul',
		avatar: ride
	},
	{
		url: 'https://s3.eu-central-1.amazonaws.com/pack-de-16/3.%23PACKDEKOZ.mp3',
		title: 'Pack de Koz',
		feat: 'Mr. Kozmo',
		avatar: toy
	}
];

const listOfImages = [blue_sky, bombes, caisse, burger, phone, ride, dinner, toy];

ReactDOM.render(<App tracks={tracks} listOfImages={listOfImages} />, document.getElementById('root'));
registerServiceWorker();
