import React from 'react';
import PropTypes from 'prop-types';
import './Plant.scss';

const Plant = ({ plant }) => (
  <div className="plant-content">
    <div className="plant-cover">
      <div className="image-wrapper col-2">
        <img src={plant.strMealThumb} alt={plant.strMeal} className="image" />
      </div>

      <div className="main-info col-2">
        <span className="family">{plant.strCategory}</span>
        <h1 className="title">{plant.strMeal}</h1>
        <p>{plant.strInstructions}</p>
        <div className="vegetable-label-wrapper">
          <span className="vegetable">{plant.strTags}</span>
        </div>
      </div>
    </div>
  </div>
);

Plant.propTypes = ({
  plant: PropTypes.shape({
    strMeal: PropTypes.string.isRequired,
    strCategory: PropTypes.string,
    strMealThumb: PropTypes.string.isRequired,
    idMeal: PropTypes.string.isRequired,
    strArea: PropTypes.string,
    strInstructions: PropTypes.string,
    strTags: PropTypes.string,
  }).isRequired,
});

export default Plant;
