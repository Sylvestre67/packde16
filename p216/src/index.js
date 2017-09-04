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


function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>  // eslint-disable-next-line
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  )
}

const tracks = [
	{
		id: uuidv4(),
		url  : 'https://s3.eu-central-1.amazonaws.com/pack-de-16/1.%23INTRODUCTION.mp3',
		title: 'Introdiction',
		feat : '',
		avatar: burger
	},
	{
		id: uuidv4(),
		url: 'https://s3.eu-central-1.amazonaws.com/pack-de-16/2.%23MAGUEULE.mp3',
		title: 'Ma Gueule',
		feat: 'GWENDELABAR',
		avatar: ride
	},
	{
		id: uuidv4(),
		url: 'https://s3.eu-central-1.amazonaws.com/pack-de-16/3.%23PACKDEKOZ.mp3',
		title: 'Pack de Koz',
		feat: '',
		avatar: toy
	},
	{
		id: uuidv4(),
		url: 'https://s3.eu-central-1.amazonaws.com/pack-de-16/4.%23MONIVRESSE.mp3',
		title: 'Mon Ivresse',
		feat: '',
		avatar: toy
	},
	{
		id: uuidv4(),
		url: 'https://s3.eu-central-1.amazonaws.com/pack-de-16/5.%23VISAGE.mp3',
		title: 'Visage',
		feat: 'JESERS',
		avatar: toy
	},
	{
		id: uuidv4(),
		url: 'https://s3.eu-central-1.amazonaws.com/pack-de-16/6.%23MOMENT.mp3',
		title: 'Moment',
		feat: 'GOUB\'S',
		avatar: toy
	},
	{
		id: uuidv4(),
		url: 'https://s3.eu-central-1.amazonaws.com/pack-de-16/7.%23PACKDELAUTREC.mp3',
		title: 'Pack de Lautrec',
		feat: 'LAUTREC',
		avatar: toy
	},
	{
		id: uuidv4(),
		url: 'https://s3.eu-central-1.amazonaws.com/pack-de-16/8.%23SUGARMAN.mp3',
		title: 'Sugar Man',
		feat: 'YANNICK EICHERT & AKASHA',
		avatar: toy
	},
	{
		id: uuidv4(),
		url: 'https://s3.eu-central-1.amazonaws.com/pack-de-16/9.%23CREMANTREDBULL.mp3',
		title: 'Cremant RedBull',
		feat: 'GIL JOGGING',
		avatar: toy
	},
	{
		id: uuidv4(),
		url: 'https://s3.eu-central-1.amazonaws.com/pack-de-16/10.%23PACKDEPAUL.mp3',
		title: 'Pack de Paul',
		feat: 'PAUL',
		avatar: toy
	},
	{
		id: uuidv4(),
		url: 'https://s3.eu-central-1.amazonaws.com/pack-de-16/11.%23PACKDENYLS.mp3',
		title: 'Pack de Nyls',
		feat: 'NYLS',
		avatar: toy
	},
	{
		id: uuidv4(),
		url: 'https://s3.eu-central-1.amazonaws.com/pack-de-16/12.%23NOCTAMBULE.mp3',
		title: 'Noctambule',
		feat: 'OAZE',
		avatar: toy
	},
	{
		id: uuidv4(),
		url: 'https://s3.eu-central-1.amazonaws.com/pack-de-16/13.%23PACKDEKRIKE.mp3',
		title: 'Pack de Krike',
		feat: 'MC. KRIKE',
		avatar: toy
	},
	{
		id: uuidv4(),
		url: 'https://s3.eu-central-1.amazonaws.com/pack-de-16/14.%23ARTISTERATE.mp3',
		title: 'Artiste Rate',
		feat: '',
		avatar: toy
	},
	{
		id: uuidv4(),
		url: 'https://s3.eu-central-1.amazonaws.com/pack-de-16/15.%23OUTRO.mp3',
		title: 'Outro',
		feat: '',
		avatar: toy
	},
	{
		id: uuidv4(),
		url: 'https://s3.eu-central-1.amazonaws.com/pack-de-16/16.%23JENECOMPRENDPAS.mp3',
		title: 'Je ne comprends pas',
		feat: '#PackDe16',
		avatar: toy
	}
];

const listOfImages = [blue_sky, bombes, caisse, burger, phone, ride, dinner, toy, blue_sky, bombes, caisse, burger, phone, ride, dinner, toy];

ReactDOM.render(<App tracks={tracks} listOfImages={listOfImages} />, document.getElementById('root'));
registerServiceWorker();
