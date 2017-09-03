import React, { Component } from 'react';
import './NextPrevious.css';

// import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import HardwareKeyboardArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import HardwareKeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';

const styles = {
	smallIcon: {
		width: 27,
		height: 27,
	},
	small: {
		width: 54,
		height: 54,
		padding: 12,
	}
};

class NextPrevious extends Component{

	render() {
		return (
			<div className="next-previous">
				<IconButton className='media-btn'
				            disabled={this.props.step < 1}
				            style={styles.small}
				            iconStyle={styles.smallIcon}
				            onClick={this.props.onPrev}>
					<HardwareKeyboardArrowLeft />
				</IconButton>
				<IconButton className="media-btn"
				            disabled={this.props.step >= this.props.numberOfTracks}
				            style={styles.small}
				            iconStyle={styles.smallIcon}
				            onClick={this.props.onNext}>
					<HardwareKeyboardArrowRight />
				</IconButton>
			</div>
		);
	}
}

export default NextPrevious;
