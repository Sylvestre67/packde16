import React, { Component } from 'react';
import { Media, Player, controls } from 'react-media-player';
import MediaCommand from './MediaCommand';
import PropTypes from 'prop-types';

import './MediaPlayer.css';

class MediaPlayer extends Component{

	componentDidUpdate(prevProps, state, refs){}

	render() {
		return (
			<div className="media-player">
				<Media media={this.props.audio}>
					<div style={{width:'100%'}}>
						<Player src={this.props.audio}
						        vendor="audio"
						        autoPlay={true}/>
						<MediaCommand />
					</div>
				</Media>
			</div>
		);
	}
}

export default MediaPlayer;

