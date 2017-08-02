import React from 'react';

// Accepts the celsius temperature as a prop, and prints whether it is enough to boil the water:
//if celsius is greater than or equal to 100, return jsx "The water would boil"
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  } else if (props.celsius <=0 ) {
    return <p>The water would freeze</p>;
  }
  return <p>The water would not boil or freeze.</p>;
}

export default BoilingVerdict;
