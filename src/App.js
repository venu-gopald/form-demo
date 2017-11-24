import React, { Component } from 'react';
import './foundation.css';
import './App.css';
import FormComponent from './FormComponent';

class App extends Component {
  render() {
    return (
      <div className="App"> 
          <h1 className="App-title">Welcome to React</h1>
        <p className="App-intro">
          <FormComponent/>
        </p>
      </div>
    );
  }
}

export default App;
