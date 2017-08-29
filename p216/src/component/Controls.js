import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Controls.css';

class Controls extends Component{
	constructor(props){
		super(props);
	}

	render() {
		return (
			<div className="controls">
				<p>
					<button onClick={this.props.onClickPrevious}> Previous </button>
					<button onClick={this.props.onClickNext}> Next </button>
				</p>
			</div>
		);
	}
}

Controls.propTypes = {
	onClickPrevious : PropTypes.func.isRequired,
	onClickNext : PropTypes.func.isRequired,
}

export default Controls;

