import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MediaCommand.css';
import '../assets/icons/font/css/open-iconic.css';



import IconButton from 'material-ui/IconButton';
import AvPause from 'material-ui/svg-icons/av/pause';
import AvPlayArrow from 'material-ui/svg-icons/av/play-arrow';
import CircularProgress from 'material-ui/CircularProgress';

import { withMediaProps } from '../assets/audio/media-player/lib/react-media-player';

const styles = {
	smallIcon: {
		width: 36,
		height: 36,
	},
	small: {
		width: 72,
		height: 72,
		padding: 16,
	},
	mediumIcon: {
		width: 48,
		height: 48,
	},
	medium: {
		width: 96,
		height: 96,
		padding: 24,
	}
};

class MediaCommand extends Component{
	constructor(props){
		super(props);
		this.state = { hasBeenReset: false };
	}

	// shouldComponentUpdate({media}) {
	// 	if(media.currentTime / media.duration === 1 && !media.isPlaying){
	// 		console.log('Playing Next');
	// 		console.log(this.state);
	// 		if(!this.state.hasBeenReset){
	// 			this.setState((prevProps) => { return { hasBeenReset : true } });
	//
	// 			setTimeout(() => {
	// 				this.props.playNextOnFinish();
	// 				this.setState((prevProps) => {
	// 					return { hasBeenReset : false }
	// 				});
	// 			},500);
	// 		}
	//
	// 	}
	// 	return true
	// }

	// onUpdate({media}){
	// 	// console.log(this.props.media.currentTime / this.props.media.duration);
	//
	// 	if(this.props.media.currentTime / this.props.media.duration === 1){
	// 		debugger;
	//
	// 		this.state.playNextOnFinish();
	// 	}
	//
	// }

	componentDidUpdate(prevProps, prevState){}

	componentDidMount(){
		this._handlePlayPause();
	}

	_handlePlayPause = () => {
		this.props.media.playPause()
	};

	_renderPlayIcon(){
		let icon = <AvPlayArrow />;

		if(this.props.media.currentTime > 0.1
			&& this.props.media.isPlaying){
			icon = <AvPause />
		}

		if(this.props.media.currentTime === 0
			&& this.props.media.isPlaying){
			icon = <CircularProgress color='black'/>
		}

		return icon
	}

	render() {
		console.log(this.props.media);
		return (
				<div className="media-command">
					<IconButton className="media-btn"
								style={styles.medium}
								touch={true}
								iconStyle={styles.mediumIcon}
								onClick={this._handlePlayPause}>
						{this._renderPlayIcon()}
					</IconButton>
				</div>
		);
	}
}

// {(this.props.media.isLoading) ? <CircularProgress color='black'/> : this._renderPlayIcon()}

MediaCommand.propTypes = {
	media: PropTypes.object.isRequired
};

export default withMediaProps(MediaCommand);
