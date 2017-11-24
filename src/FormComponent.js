import React, { Component } from 'react';

const formInstance = (
<form>
  <fieldset>
    <legend>Fieldset Legend</legend>
    <label>Input Label
      <input type="text" placeholder="Inputs and other form elements go inside..."/>
    </label>
  </fieldset>
</form>
);


class FormComponent extends Component {
  render() {
    return (
      <div >
        {formInstance}
      </div>
    );
  }
}

export default FormComponent;
