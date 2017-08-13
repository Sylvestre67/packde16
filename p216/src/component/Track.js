import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';

import MediaPlayer from './MediaPlayer';
import Message from './Message';

import './Track.css';

// import PropTypes from 'prop-types';

class Track extends Component{

	componentDidUpdate(props,state,refs){
		// console.log(this.props);
	}

	render() {
		return (
			<div className="track">
				<Message />
				<MediaPlayer />
			</div>
		);
	}
}

export default Track;
