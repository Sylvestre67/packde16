import React, { Component } from 'react';
import { Media, Player, controls } from 'react-media-player';
import MediaCommand from './MediaCommand';
import PropTypes from 'prop-types';

import './MediaPlayer.css';

import audio from '../audio/sample.mp3';

class MediaPlayer extends Component{

	componentDidUpdate(prevProps, state, refs){
		console.log(prevProps.media.currentTime);
		console.log(this.props.media.currentTime);
		console.log(state);
	}

	render() {
		return (
			<div className="media-player">
				<Media media={audio}>
					<div style={{width:'100%'}}>
						<Player src={audio} vendor="audio"/>
						<MediaCommand />
					</div>
				</Media>
			</div>
		);
	}
}

export default MediaPlayer;

