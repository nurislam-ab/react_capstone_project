import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPlantBySlug, selectPlant } from '../actions/index';
import PlantPreviewCard from '../components/PlantPreviewCard/PlantPreviewCard';

const PlantsList = ({ plants, selectPlant, fetchPlantBySlug }) => {
  const handleFetchPlant = plant => {
    selectPlant(plant.idMeal);
    fetchPlantBySlug(plant.idMeal);
  };

  const renderPlants = plants.map(plant => (
    <PlantPreviewCard
      plant={plant}
      key={plant.idMeal}
      clickHandler={() => handleFetchPlant(plant)}
    />
  ));

  return (
    <div className="plants-list">
      {renderPlants}
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  selectPlant: idMeal => dispatch(selectPlant(idMeal)),
  fetchPlantBySlug: idMeal => dispatch(fetchPlantBySlug(idMeal)),
});

PlantsList.propTypes = {
  plants: PropTypes.arrayOf(PropTypes.object),
  selectPlant: PropTypes.func.isRequired,
  fetchPlantBySlug: PropTypes.func.isRequired,
};

PlantsList.defaultProps = {
  plants: [],
};

export default connect(null, mapDispatchToProps)(PlantsList);
