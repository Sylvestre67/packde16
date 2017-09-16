import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

import './Track.css';

import PropTypes from 'prop-types';

class Track extends Component{

	render() {
		const feat = (this.props.audio.feat !== '')
			? ['"feat. ', this.props.audio.feat,'"'].join('')
			: '';

		const track = <div key={this.props.audio.id} className="track">
				<img src={this.props.audio.avatar} alt={['#packde16',this.props.audio.title].join(' - ')} />
				<div>
					<p>{[this.props.step + 1,'. #',this.props.audio.title].join('')}</p>
					<p>{feat}</p>
				</div>
		</div>;

		const credit = <div className="credit-wrap">
						<div className="credit">
							<p>All songs written by Kozmo, arranged and mixed by Darius Studio.</p>
							<p>Mastering by Darius Studio - Gérald Koehl</p>
							<p>Photography & Artwork: Bartosch Salmanski & Garance Frisson</p>
							<p>Web: <a href="https://github.com/sylvestre67"
							           target="_blank" rel="noopener noreferrer">Sylvestre</a></p>
							<p>Recording: Darius Studio</p>
							<p>Foodtruck: 
								<a href="http://auptitsawyer.fr/" target="_blank" rel="noopener noreferrer">
									Au Ptit Sawyer
								</a>
							</p>
						</div>
					</div>;

		return (

			<CSSTransitionGroup
				transitionName="slide-in"
				transitionAppear={true}
				transitionAppearTimeout={500}
				transitionEnterTimeout={500}
				transitionLeaveTimeout={300}>
				{(this.props.step < 16)
					? track
					: credit
				}
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
