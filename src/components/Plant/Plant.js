import React from 'react';
import PropTypes from 'prop-types';
import './Plant.scss';

const Plant = ({ plant }) => {
  const plantName = plant.common_name === null || plant.common_name === '' ? plant.scientific_name : plant.common_name;

  const vegetable = plant.vegetable === false ? 'not vegetable' : 'vegetable';
  return (
    <div className="plant-content">
      <div className="plant-cover">
        <div className="image-wrapper col-2">
          <img src={plant.image_url} alt={plantName} className="image" />
        </div>

        <div className="main-info col-2">
          <span className="family">{plant.family.name}</span>
          <h1 className="title">{plantName}</h1>
          <p>{plant.observations}</p>
          <div className="vegetable-label-wrapper">
            <span className="vegetable">{vegetable}</span>
          </div>
        </div>
      </div>

      <div className="short-info">
        <div className="col-4 info-block">
          <strong>{plant.scientific_name}</strong>
          <span>scientific name</span>
        </div>

        <div className="col-4 info-block">
          <strong>{plant.author}</strong>
          <span>author</span>
        </div>

        <div className="col-4 info-block">
          <strong>{plant.family_common_name}</strong>
          <span>family common name</span>
        </div>

        <div className="col-4 info-block">
          <strong>{plant.year}</strong>
          <span>year found</span>
        </div>
      </div>
    </div>
  );
};

Plant.propTypes = {
  plant: PropTypes.instanceOf(Object).isRequired,
};

export default Plant;
