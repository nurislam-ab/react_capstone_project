const getPlantsState = store => store.plants.plants;

const getPlantFamilies = store => store.categories.categories;

const getPlantsList = store => getPlantsState(store);

const getPlantFamiliesList = store => getPlantFamilies(store);

export {
  getPlantsList,
  getPlantsState,
  getPlantFamiliesList,
};
