import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MediaCommand.css';
import '../assets/icons/font/css/open-iconic.css';

import IconButton from 'material-ui/IconButton';
import AvPause from 'material-ui/svg-icons/av/pause';
import AvPlayArrow from 'material-ui/svg-icons/av/play-arrow';


import { withMediaProps } from 'react-media-player'

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

	shouldComponentUpdate({ media }, nextState) {
		this.onUpdate({media});
		return true
	}

	onUpdate({ media }){
		this.props.media.currenTime = media.currentTime;
		return this.props.media.isPlaying !== media.isPlaying;
	}

	componentWillMount(){
		this.setState({current:this.props.media.currentTime})
	}

	_handlePlayPause = () => {
		this.props.media.playPause()
	}

	render() {
		const { media } = this.props;
		return (
				<div className="media-command">
					{/*<IconButton className="media-btn"*/}
					            {/*style={styles.small}*/}
					            {/*iconStyle={styles.smallIcon}>*/}
						{/*<AvVolumeUp />*/}
					{/*</IconButton>*/}
					{/*<Slider style={{height: 100}} axis="y" defaultValue={0.5} />*/}
					<IconButton className="media-btn"
						style={styles.medium}
					    touch={true}
						iconStyle={styles.mediumIcon}
						onClick={this._handlePlayPause}>
						{media.isPlaying ? <AvPause /> : <AvPlayArrow />}
					</IconButton>
				</div>
		);
	}
}

export default withMediaProps(MediaCommand);
