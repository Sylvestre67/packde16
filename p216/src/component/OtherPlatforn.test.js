import React from 'react';
import ReactDOM from 'react-dom';
import OtherPlatform from './OtherPlatform';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<OtherPlatform />, div);
});

