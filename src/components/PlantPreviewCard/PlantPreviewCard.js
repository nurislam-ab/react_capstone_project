/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './PlantPreviewCard.scss';

const PlantPreviewCard = ({ plant, clickHandler }) => {
  const {
    id,
    common_name,
    family,
    image_url,
    slug,
    scientific_name,
  } = plant;

  const handleClick = plant => {
    clickHandler(plant);
  };

  const plantName = common_name === null || common_name === '' ? scientific_name : common_name;

  return (
    <div className="plant-excerpt" key={id}>
      <div className="family-wrapper">
        <span className="family">{family}</span>
      </div>
      <div className="image-wrapper">
        <img src={image_url} alt={plantName} className="image" />
      </div>
      <div className="info">
        <h3 className="title">
          <Link
            to={{
              pathname: `/plants/${slug}`,
              state: { plant },
            }}
            onClick={() => handleClick(plant)}
            className="link"
          >
            {plantName}
          </Link>
        </h3>
      </div>
    </div>
  );
};

PlantPreviewCard.propTypes = {
  plant: PropTypes.shape({
    id: PropTypes.number.isRequired,
    family: PropTypes.string.isRequired,
    common_name: PropTypes.string,
    scientific_name: PropTypes.string,
    image_url: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default PlantPreviewCard;
