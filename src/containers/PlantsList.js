import React from 'react';

const PlantsList = ({ plants }) => {
  console.log('reach plant list');

  const renderPlants = plants.map(plant => (
    <div className="plant-excerpt" key={plant.id}>
      <h3>{plant.title}</h3>
      <p>{plant.content.substring(0, 100)}</p>
    </div>
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

export default PlantsList;
