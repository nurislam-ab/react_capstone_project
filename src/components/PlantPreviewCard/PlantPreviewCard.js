import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './PlantPreviewCard.scss';

const PlantPreviewCard = ({ plant, clickHandler }) => {
  const {
    idMeal,
    strMeal,
    strMealThumb,
  } = plant;

  const handleClick = plant => {
    clickHandler(plant);
  };

  return (
    <div className="plant-excerpt" key={idMeal}>
      <div className="image-wrapper">
        <img src={strMealThumb} alt={strMeal} className="image" />
      </div>
      <div className="info">
        <h3 className="title">
          <Link
            to={{
              pathname: `/plants/${idMeal}`,
              state: { plant },
            }}
            onClick={() => handleClick(plant)}
            className="link"
          >
            {strMeal}
          </Link>
        </h3>
      </div>
    </div>
  );
};

PlantPreviewCard.propTypes = {
  plant: PropTypes.shape({
    idMeal: PropTypes.string.isRequired,
    strMeal: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string,
  }).isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default PlantPreviewCard;
