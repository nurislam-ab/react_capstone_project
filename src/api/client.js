import axios from 'axios';

const ALL_PLANTS = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian';
const ALL_FAMILIES = 'https://www.themealdb.com/api/json/v1/1/categories.php';
const FAMILIES_BY_PAGE = `${ALL_FAMILIES}`;
const FILTERED_PLANTS_BY_FAMILY = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';

const getPlants = async (filter = '') => {
  const url = filter === 'All' || filter === '' || filter === null ? ALL_PLANTS : FILTERED_PLANTS_BY_FAMILY + filter;

  try {
    const { data: { meals } } = await axios.get(url);

    const plants = [];

    await Promise.all(meals.map(async plant => {
      plants.push(plant);
    }));
    return plants;
  } catch (e) {
    throw new Error(e);
  }
};

const getAllFamilies = async () => {
  const families = [];
  const url = FAMILIES_BY_PAGE;
  const { data: { categories } } = await axios.get(url);

  Promise.all(categories.map(async family => {
    families.push(family);
  }));

  return Promise.all(families);
};

export {
  getPlants,
  getAllFamilies,
  FILTERED_PLANTS_BY_FAMILY,
};
