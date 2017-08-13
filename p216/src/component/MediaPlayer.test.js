import React from 'react';
import ReactDOM from 'react-dom';
import MediaPlayer from './MediaPlayer';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<MediaPlayer />, div);
});
