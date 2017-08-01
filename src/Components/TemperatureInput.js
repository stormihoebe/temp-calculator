import React from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    // === Old ===
    // this.setState({ temperature: e.target.value });

    // === New ===
    this.props.onTemperatureChange(e.target.value)
  }
  render() {
    const { scale, temperature} = this.props; // converted to destructuring
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        {/** Utilizing 'scale' prop as bracket notation property accessor **/}
        <input
          value={temperature}
          onChange={this.handleChange}
        />
      </fieldset>
    );
  }
}

export default TemperatureInput;
