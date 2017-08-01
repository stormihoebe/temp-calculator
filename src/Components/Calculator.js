import React from 'react';
import BoilingVerdict from './BoilingVerdict';

// Next, we will create a component called Calculator.
// It renders an <input> that lets you enter the temperature, and keeps its value in this.state.temperature.
// Additionally, it renders the BoilingVerdict for the current input value.

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      temperature: e.target.value
    });
  }
  render() {
    const temperature = this.state.temperature; // or destructuring, const { temperature } = this.state;
    return (
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input
          value={temperature}
          onChange={this.handleChange}
        />
      <BoilingVerdict celsius={parseFloat(temperature)} />
      {/** parseFloat parses an argument and returns a floating point number **/}
      </fieldset>
    );
  }
}

export default Calculator;
