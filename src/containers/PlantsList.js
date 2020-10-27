import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPlantBySlug, selectPlant } from '../actions/index';
import PlantPreviewCard from '../components/PlantPreviewCard';

const PlantsList = ({ plants, selectPlant, fetchPlantBySlug }) => {

  const handleFetchPlant = plant => {
    selectPlant(plant.slug);
    fetchPlantBySlug(plant.slug);
  };

  const renderPlants = plants.map(plant => (
    <PlantPreviewCard
      plant={plant}
      key={plant.id}
      clickHandler={() => handleFetchPlant(plant)}
    />
  ));

  return (
    <section>
      <h2>Plants</h2>
      <div className="plants-list">
        {renderPlants}
      </div>
    </section>
  );
};

const mapDispatchToProps = dispatch => ({
  selectPlant: slug => dispatch(selectPlant(slug)),
  fetchPlantBySlug: slug => dispatch(fetchPlantBySlug(slug)),
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
