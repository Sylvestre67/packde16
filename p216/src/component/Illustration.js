import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Illustration.css';

class Illustration extends Component{
	render() {
		return (
			<div className="illustration">
				<p>Illustration</p>
				<img src={this.props.img} />
			</div>
		);
	}
}

export default Illustration;

