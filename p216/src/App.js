import React, { Component } from 'react';

import Message from './component/Message';

import './App.css';

class App extends Component {
	constructor(props){
		super(props);
		this.listOfClasses = ['caisse','blue-sky','burger','phone','ride','dinner','toy','bombes'];
	}

	componentWillMount(){
		let i = 0;

		this.setState((prevState, props) => {
			return {counter: 0 + props.step};
		});

		this.updateCounter(i);
	}

	updateCounter(i){
		if(i > 6){
			return;
		}
		else{
			setTimeout(() => {
				this.setState((prevState, props) => {
					return {counter: i + props.step};
				});
				i++;
				this.updateCounter(i);
			},500)
		}
	}

	render() {
		return (
			<div className={"App " + this.listOfClasses[this.state.counter]}>
				<Message />
			</div>
		);
	}
}

export default App;
