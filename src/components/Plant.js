import React from 'react';
import PropTypes from 'prop-types';

const Plant = ({ plantId, title, content }) => (
  <div className="plant-preivew">
    <span>{plantId}</span>
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

Plant.propTypes = {
  plantId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Plant;
