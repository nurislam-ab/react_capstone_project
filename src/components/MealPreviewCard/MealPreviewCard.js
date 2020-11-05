import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './MealPreviewCard.scss';

const MealPreviewCard = ({ meal, clickHandler }) => {
  const {
    idMeal,
    strMeal,
    strMealThumb,
  } = meal;

  const handleClick = meal => {
    clickHandler(meal);
  };

  return (
    <div className="meal-excerpt" key={idMeal}>
      <div className="image-wrapper">
        <img src={strMealThumb} alt={strMeal} className="image" />
      </div>
      <div className="info">
        <h3 className="title">
          <Link
            to={{
              pathname: `/meals/${idMeal}`,
              state: { meal },
            }}
            onClick={() => handleClick(meal)}
            className="link"
          >
            {strMeal}
          </Link>
        </h3>
      </div>
    </div>
  );
};

MealPreviewCard.propTypes = {
  meal: PropTypes.shape({
    idMeal: PropTypes.string.isRequired,
    strMeal: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string,
  }).isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default MealPreviewCard;
