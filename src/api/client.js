/* eslint-disable no-await-in-loop */
import axios from 'axios';

const TOKEN = '_XSBdB7Gl5t4ZS9-Z_MCjLFKLifSi7Sa2HNIgPXw-LE';
const ALL_PLANTS = `https://trefle.io/api/v1/plants?token=${TOKEN}`;
const ALL_FAMILIES = `https://trefle.io/api/v1/families?token=${TOKEN}`;
const FAMILIES_BY_PAGE = `${ALL_FAMILIES}&page=`;
const FILTERED_PLANTS_BY_FAMILY = `https://trefle.io/api/v1/plants?token=${TOKEN}&filter[family_common_name]=`;

const getPlants = async (filter = '') => {
  const url = filter === 'All' || filter === '' || filter === null ? ALL_PLANTS : FILTERED_PLANTS_BY_FAMILY + filter;

  try {
    const { data: { data } } = await axios.get(url);

    const plants = [];

    await Promise.all(data.map(async plant => {
      plants.push(plant);
    }));

    return plants;
  } catch (e) {
    throw new Error(e);
  }
};

const getAllFamilies = async () => {
  const families = [];
  for (let i = 1; i < 35; i += 1) {
    const url = FAMILIES_BY_PAGE + i;
    const { data: { data } } = await axios.get(url);

    Promise.all(data.map(async family => {
      families.push(family);
    }));
  }

  return Promise.all(families);
};

export {
  getPlants,
  getAllFamilies,
  FILTERED_PLANTS_BY_FAMILY,
  TOKEN,
};
