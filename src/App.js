import React, { Component } from 'react';
import './App.css';
import './foundation.css';
import FormComponent from './FormComponent';

class App extends Component {
  render() {
    return (
      <div className="App"> 
          <FormComponent/>
      </div>
    );
  }
}

export default App;
