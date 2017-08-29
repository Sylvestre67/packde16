import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

import './Track.css';

import PropTypes from 'prop-types';

class Track extends Component{

	render() {
		const track = <div key={this.props.audio.feat} className="track">
				<img src={this.props.audio.avatar} alt={['#packde16',this.props.audio.title].join(' - ')} />
				<div>
					<p>{this.props.audio.title}</p>
					<p>{this.props.audio.feat}</p>
				</div>

		</div>;

		return (
			<CSSTransitionGroup
				transitionName="slide-in"
				transitionAppear={true}
				transitionAppearTimeout={500}
				transitionEnterTimeout={500}
				transitionLeaveTimeout={300}>
				{track}
			</CSSTransitionGroup>
		);
	}
}

Track.propTypes = {
	audio: PropTypes.shape({
		url  : PropTypes.string,
		title: PropTypes.string,
		feat : PropTypes.string,
		avatar: PropTypes.string
	}).isRequired,
};

export default Track;
