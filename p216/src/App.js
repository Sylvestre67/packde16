import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';

import Track from './component/Track';
import Illustration from './component/Illustration';
import Controls from './component/Controls';

import './App.css';

import blue_sky from './img/blue_sky.png';
import bombes from './img/bombes.png';
import caisse from './img/caisse.png';
import burger from './img/burger.png';
import phone from './img/phone.png';
import ride from './img/ride.png';
import dinner from './img/dinner.png';
import toy from './img/toy.png';

class App extends Component {
	constructor(props) {
		super(props);
		this.listOfImages = [blue_sky, bombes, caisse, burger, phone, ride, dinner, toy];

		this.renderIllustrations = this.renderIllustrations.bind(this);
		this.prevTrack = this.prevTrack.bind(this);
		this.nextTrack = this.nextTrack.bind(this);
	}

	componentWillMount(){

	}

	componentDidMount() {
		setTimeout(()=>{
			this.refs.reactSwipe.next();
		},1000);
	}

	componentDidUpdate(props,state,refs){

	}

	nextTrack() {
		this.refs.reactSwipe.next();
	}

	prevTrack() {
		this.refs.reactSwipe.prev();
	}

	renderIllustrations(){
		return  this.listOfImages.map((img,index) => {
			return <Illustration key={index} img={img}/>
		});
	}

	render() {
		return (
			<div className="App"
			     style={{'backgroundImage': ['url(', this.listOfImages[0], ')'].join('')}}>
				<ReactSwipe ref="reactSwipe"
				            className="illustrations"
				            swipeOptions={{
					            speed: 500,
					            disableScroll: true,
					            stopPropagation: true,
				            	continuous: false
				            }}>
					{this.renderIllustrations()}
				</ReactSwipe>
				<Controls onClickPrevious={this.prevTrack}
					onClickNext={this.nextTrack}/>
				<Track images={this.listOfImages} />
			</div>
		);
	}
}

export default App;
