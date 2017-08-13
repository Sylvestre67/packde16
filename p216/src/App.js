import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';

import Track from './component/Track';
import Illustration from './component/Illustration';

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
		this.listOfImages = [bombes, blue_sky, caisse, burger, phone, ride, dinner, toy];
		this.renderIllustrations = this.renderIllustrations.bind(this);
	}

	componentWillMount(){

	}

	componentDidMount() {

	}

	componentDidUpdate(props,state,refs){

	}

	renderIllustrations(){
		return  this.listOfImages.map((img,index) => {
			return <Illustration key={index} img={img}/>
		});
	}

	render() {
		return (
			<div className="App"
			     style={{'backgroundImage': ['url(', bombes, ')'].join('')}}>
				<ReactSwipe className="illustrations" swipeOptions={{continuous: false}}>
					{this.renderIllustrations()}
				</ReactSwipe>
				<Track images={this.listOfImages} />
			</div>
		);
	}
}

export default App;
