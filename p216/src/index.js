import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import intro from './img/intro.png';
import ma_gueule from './img/ma_gueule.png';
import pack_de_koz from './img/pack_de_koz.png';
import mon_ivresse from './img/charlie.png';
import visage from './img/visage.png';
import moment from './img/moments.png';
import pack_de_lautrec from './img/pack_de_lautrec.png';
import sugar_man from './img/sugar_man.png';
import cremant_redbull from './img/cremant_redbull.png';
import pack_de_paul from './img/pack_de_paul.png';
import pack_de_nyls from './img/pack_de_nyls.png';
import noctambule from './img/noctambule.png';
import pack_de_krike from './img/pack_de_krike.png';
import artiste_rate from './img/artiste_rate.png';
import outro from './img/outro.png';
import je_ne_comprends_pas from './img/je_ne_comprends_pas.png';


import bombes from './img/bombes.png';
import caisse from './img/caisse.png';
import burger from './img/burger.png';

import ride from './img/ride.png';
import dinner from './img/dinner.png';
import toy from './img/toy.png';
import check from './img/check.png';
import comptoir from './img/comptoir.png';

// Wrong orientation --- DO NOT USE
// import phone from './img/phone.png';

const listOfImages = [intro, ma_gueule, pack_de_koz, mon_ivresse, visage,
	moment, pack_de_lautrec, sugar_man, cremant_redbull,pack_de_paul, pack_de_nyls,
	noctambule, pack_de_krike, artiste_rate,outro, je_ne_comprends_pas, caisse];


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
		avatar: bombes
	},
	{
		id: uuidv4(),
		url: 'https://s3.eu-central-1.amazonaws.com/pack-de-16/5.%23VISAGE.mp3',
		title: 'Visage',
		feat: 'JESERS',
		avatar: dinner
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
		avatar: check
	},
	{
		id: uuidv4(),
		url: 'https://s3.eu-central-1.amazonaws.com/pack-de-16/8.%23SUGARMAN.mp3',
		title: 'Sugar Man',
		feat: 'YANNICK EICHERT & AKASHA',
		avatar: comptoir
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
	},
	{
		id: uuidv4(),
		url: '',
		title: '',
		feat: '',
		avatar: toy
	}
];

ReactDOM.render(<App tracks={tracks} listOfImages={listOfImages} />, document.getElementById('root'));
registerServiceWorker();
