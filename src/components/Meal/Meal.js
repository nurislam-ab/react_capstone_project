import React from 'react';
import PropTypes from 'prop-types';
import './Meal.scss';

const Meal = ({ meal }) => (
  <div className="meal-content">
    <div className="meal-cover">
      <div className="image-wrapper col-2">
        <img src={meal.strMealThumb} alt={meal.strMeal} className="image" />
      </div>

      <div className="main-info col-2">
        <span className="family">{meal.strCategory}</span>
        <h1 className="title">{meal.strMeal}</h1>
        <p>{meal.strInstructions}</p>
        <div className="vegetable-label-wrapper">
          <span className="vegetable">{meal.strTags}</span>
        </div>
      </div>
    </div>
  </div>
);

Meal.propTypes = ({
  meal: PropTypes.shape({
    strMeal: PropTypes.string.isRequired,
    strCategory: PropTypes.string,
    strMealThumb: PropTypes.string.isRequired,
    idMeal: PropTypes.string.isRequired,
    strArea: PropTypes.string,
    strInstructions: PropTypes.string,
    strTags: PropTypes.string,
  }).isRequired,
});

export default Meal;
