import React, { Component } from 'react';
import { Media, Player } from 'react-media-player';
import MediaCommand from './MediaCommand';
import PropTypes from 'prop-types';

import './MediaPlayer.css';

class MediaPlayer extends Component{
	
	render() {
		return (
			<div className="media-player">
				<Media media={this.props.audio.url}>
					<div style={{width:'100%'}}>
						<Player src={this.props.audio.url}
						        vendor="audio"
						        autoPlay={true}/>
						{(this.props.audio.url !== '')
							? <MediaCommand {...this.props} />
							: ''
						}
					</div>
				</Media>
			</div>
		);
	}
}

MediaPlayer.propTypes = {
	audio: PropTypes.shape({
		url  : PropTypes.string,
		title: PropTypes.string,
		feat : PropTypes.string,
		avatar: PropTypes.string
	}).isRequired,
};

export default MediaPlayer;

