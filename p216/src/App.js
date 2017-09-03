import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import PropTypes from 'prop-types';

import ReactSwipe from 'react-swipe';

import Illustration from './component/Illustration';
import MediaPlayer from './component/MediaPlayer';
import NextPrevious from './component/NextPrevious';
import Track from './component/Track';

import './App.css';


injectTapEventPlugin();

class App extends Component {
	constructor(props) {
		super(props);

		this.renderIllustrations = this.renderIllustrations.bind(this);
		this.prevTrack = this.prevTrack.bind(this);
		this.nextTrack = this.nextTrack.bind(this);
	}

	componentWillMount(){
		this.setState(() => {
			return {
				step: 0,
				audio: this.props.tracks[0]
			}
		});
	}

	componentDidMount(){
		if(window.location.hash !== ''){
			this.refs.reactSwipe.slide(+(window.location.hash.replace('#','')), 250);
		}
	}

	_updateLocationHash(step){
		window.location.hash = step;
	}

	nextTrack() {
		this.refs.reactSwipe.next();

		this.setState((prevState) => {

			this._updateLocationHash( this.refs.reactSwipe.getPos());

			return {
				step: this.refs.reactSwipe.getPos(),
				audio: this.props.tracks[this.refs.reactSwipe.getPos()]
			}
		});
	}

	prevTrack() {
		this.refs.reactSwipe.prev();

		this.setState((prevState) => {

			this._updateLocationHash( this.refs.reactSwipe.getPos());

			return {
				step: this.refs.reactSwipe.getPos(),
				audio: this.props.tracks[this.refs.reactSwipe.getPos()]
			}
		});

	}

	renderIllustrations(){
		return  this.props.listOfImages.map((img,index) => {
			return <Illustration key={index} img={img}/>
		});
	}

	renderReactSwipe(){
		return <ReactSwipe ref="reactSwipe"
		                   className="illustrations"
		                   swipeOptions={{
			                   speed: 500,
			                   disableScroll: true,
			                   stopPropagation: true,
			                   continuous: false,
			                   transitionEnd: (index, elem) => {
				                   this.setState(() => {
					                   return {
						                   step: index,
						                   audio: this.props.tracks[index]
					                   }
				                   });
			                   }
		                   }}>
			{this.renderIllustrations()}
		</ReactSwipe>;
	}

	render() {
		return (
			<MuiThemeProvider>
				<div className="App"
				     style={{'backgroundImage': ['url(', this.props.listOfImages[0], ')'].join('')}}>
					{this.renderReactSwipe()}
					<Track {...this.state} />
					<NextPrevious numberOfTracks={this.props.listOfImages.length}
						step={this.state.step}
						onNext={this.nextTrack}
						onPrev={this.prevTrack} />
					<MediaPlayer audio={this.state.audio} />
				</div>
			</MuiThemeProvider>
		);
	}
}

App.propTypes = {
	tracks: PropTypes.arrayOf(PropTypes.object).isRequired,
	listOfImages: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;
