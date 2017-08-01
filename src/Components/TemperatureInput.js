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
    this.setState({
      temperature: e.target.value
    });
  }
  render() {
    const temperature = this.state.temperature; // or destructuring, const { temperature } = this.state;
    const scale = this.props.scale; // const { scale } = this.props;
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
