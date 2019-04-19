import React from 'react';
import PropTypes from 'prop-types';

function Tap(props){
  return (
    <div>
      <h3>{props.name}</h3>
      <h4>Brewed in: {props.brewery}</h4>
      <p>Alcohol Percent: {props.alcoholPercent}</p>
      <p>Brewed from this region: {props.region}</p>
      <hr/>
    </div>
  );
}

Tap.propTypes = {
  name: PropTypes.string,
  brewery: PropTypes.string,
  alcoholPercent: PropTypes.string,
  region: PropTypes.string
};

export default Tap;
