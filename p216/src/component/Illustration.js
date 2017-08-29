import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Illustration.css';

class Illustration extends Component{
	render() {
		return (
			<div className="illustration"
			     style={{'backgroundImage': ['url(', this.props.img, ')'].join('')}}>
			</div>
		);
	}
}

Illustration.propTypes = {
	name: PropTypes.string
};

export default Illustration;

