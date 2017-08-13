import React from 'react';
import ReactDOM from 'react-dom';
import Illustration from './Illustration';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Illustration />, div);
});
