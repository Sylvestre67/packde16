import React, { Component } from 'react';

import './App.css';

class App extends Component {

  componentWillMount(){

    this.setState((prevState, props) => {
      return {counter: 0 + props.step};
    });

    setInterval(() => {
      this.setState((prevState, props) => {
        return (prevState.counter)
          ? {counter: prevState.counter + props.step}
          : {counter: 1 + props.step};
      });
    }, 1000);
  }

  render() {
    return (
      <div className={(this.state.counter %2 !== 0) ? "App caisse" : "App blue-sky"}>

      </div>
    );
  }
}

export default App;
