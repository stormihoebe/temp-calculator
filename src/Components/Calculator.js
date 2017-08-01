import React from 'react';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';

// Next, we will create a component called Calculator.
// It renders an <input> that lets you enter the temperature, and keeps its value in this.state.temperature.
// Additionally, it renders the BoilingVerdict for the current input value.

class Calculator extends React.Component {
  render() {
    return (
      <div>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </div>
    )
  }
}

export default Calculator;
