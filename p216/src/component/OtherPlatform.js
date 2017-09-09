import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './OtherPlatform.css';
import itunes from '../img/itunes.png';

class OtherPlatform extends Component{
	render() {
		return (
			<div className="other">
				<a href="http://itunes.apple.com/album/id1279844887?is=1&app=itunes"
				target="_blank" rel="noopener noreferrer">
					<img src={itunes} alt="#packDe16 on itunes"/>
				</a>
			</div>
		);
	}
}

OtherPlatform.propTypes = {
	name: PropTypes.string
};

export default OtherPlatform;

