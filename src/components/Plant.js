import React from 'react';
import PropTypes from 'prop-types';

const Plant = ({ plant }) => (
  <div className="plant-details">
    <p>{plant.family_common_name}</p>
  </div>
);

Plant.propTypes = {
  plant: PropTypes.instanceOf(Object).isRequired,
};

export default Plant;
