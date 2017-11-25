import React, { Component } from 'react';

const formInstance = (
  <div class="grid-container">
    <h1 className="App-title"> Enter Details in the Form</h1>
    <div class="row collapse">
    <div class="large-3 small-3 columns">
      <select> 
        <option>Mr.</option>
        <option>Mrs.</option>
        <option>Miss.</option>
        <option>Ms.</option>
        <option>Dr.</option>
      </select>
    </div>
    <div class="large-9 small-9 columns">
      <input type="text" placeholder="Name" />
    </div>
  </div>
  <input type="email" placeholder="Email" />
</div>
);

class FormComponent extends Component {
  render() {
    return (
      <div>
        {formInstance}
      </div>
    );
  }
}

export default FormComponent;
