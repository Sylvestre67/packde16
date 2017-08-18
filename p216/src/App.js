import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import ReactSwipe from 'react-swipe';

import Illustration from './component/Illustration';
import MediaPlayer from './component/MediaPlayer';
import NextPrevious from './component/NextPrevious';
import Track from './component/Track';

import './App.css';

import blue_sky from './img/blue_sky.png';
import bombes from './img/bombes.png';
import caisse from './img/caisse.png';
import burger from './img/burger.png';
import phone from './img/phone.png';
import ride from './img/ride.png';
import dinner from './img/dinner.png';
import toy from './img/toy.png';

injectTapEventPlugin();

class App extends Component {
	constructor(props) {
		super(props);
		this.listOfImages = [blue_sky, bombes, caisse, burger, phone, ride, dinner, toy];
		this.renderIllustrations = this.renderIllustrations.bind(this);
		this.prevTrack = this.prevTrack.bind(this);
		this.nextTrack = this.nextTrack.bind(this);

	}

	componentWillMount(){
		this.setState(() => { return {'step': 0} });
	}

	componentDidMount() {
		setTimeout(()=>{
			// this.nextTrack();
		},1000);
	}

	componentDidUpdate(props,state,refs){

	}

	nextTrack() {
		this.refs.reactSwipe.next();

		this.setState((prevState) => {
			return {step: this.refs.reactSwipe.getPos()}
		});
	}

	prevTrack() {
		this.refs.reactSwipe.prev();
		this.setState(() => {
			return {'step': this.refs.reactSwipe.getPos()}
		});
		console.log(this.state);
	}

	renderIllustrations(){
		return  this.listOfImages.map((img,index) => {
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
			                   continuous: false
		                   }}>
			{this.renderIllustrations()}
		</ReactSwipe>;
	}

	render() {
		const react_swipe = this.renderReactSwipe()
		return (
			<MuiThemeProvider>
				<div className="App"
				     style={{'backgroundImage': ['url(', this.listOfImages[0], ')'].join('')}}>
					{react_swipe}
					<Track />
					<NextPrevious step={this.state.step}
						onNext={this.nextTrack}
						onPrev={this.prevTrack} />
					<MediaPlayer />
				</div>
			</MuiThemeProvider>
		);
	}
}

export default App;
