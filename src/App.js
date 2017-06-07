import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: '',
      name: '',
      answers: {
        q1: '',
        q2: '',
        q3: '',
        q4: ''
      },
      submitte: false
    }
  }
  render() {
    var user;
    var questions;
    return (
      <div className="App">
        <div className="App-header">
          <h2>Simple Survey</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
