import React from 'react';
import BoilingVerdict from './BoilingVerdict';
<<<<<<< HEAD
import TemperatureInput from './TemperatureInput';
import { tryConvert, toCelsius, toFahrenheit } from '../helperFunctions.js';
=======
>>>>>>> master

class Calculator extends React.Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {
      temperature: '',
      scale: 'c'
    };
  }
  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }
  render() {
    const { scale, temperature } = this.state;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
      <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    )
=======
  }
  render() {
    return (
      <div>Hello</div>
    );
>>>>>>> master
  }
}

export default Calculator;
