import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
  console.log('plant from preview card', plant);

  const plantName = common_name === null || common_name === '' ? scientific_name : common_name;

  return (
    <div className="plant-excerpt" key={id}>
      <h3>
        <Link
          to={{
            pathname: `/plants/${slug}`,
            state: { plant },
          }}
          onClick={() => handleClick(plant)}
        >
          {plantName}
        </Link>
      </h3>
      <p>{family}</p>
      <img src={image_url} alt={plantName} />
    </div>
  );
};

PlantPreviewCard.propTypes = {
  plant: PropTypes.shape({
    id: PropTypes.number.isRequired,
    family: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default PlantPreviewCard;
