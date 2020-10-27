import axios from 'axios';
import {
  FETCH_INIT,
  FETCH_PLANTS,
  FETCH_FAIL,
  CHANGE_FILTER,
  FETCH_CATEGORY,
  FETCH_PLANT,
  FETCH_INIT_PLANT,
  SELECT_PLANT,
  FETCH_PLANT_ERROR,
  FETCH_SUCCESS,
} from './actionTypes';

import { TOKEN } from '../api/client';

const fetchInit = () => ({
  type: FETCH_INIT,
});

const fetchPlants = content => ({
  type: FETCH_PLANTS,
  payload: {
    plants: content,
  },
});

const fetchFail = () => ({
  type: FETCH_FAIL,
});

const fetchCategories = content => ({
  type: FETCH_CATEGORY,
  payload: {
    categories: content,
  },
});

const fetchPlant = content => ({
  type: FETCH_PLANT,
  payload: {
    plant: content,
  },
});

const fetchSuccess = data => ({
  type: FETCH_SUCCESS,
  payload: data,
});

const selectPlant = slug => ({
  type: SELECT_PLANT,
  slug,
});

const fetchInitPlant = () => ({
  type: FETCH_INIT_PLANT,
});

const fetchPlantError = error => ({
  type: FETCH_PLANT_ERROR,
  payload: error,
});

const fetchPlantBySlug = slug => dispatch => {
  const BASE_URL = 'https://trefle.io//api/v1/plants/';
  const url = `${BASE_URL}${slug}?token=${TOKEN}`;
  dispatch(fetchInitPlant());
  axios.get(url)
    .then(response => {
      dispatch(fetchSuccess(response.data));
    })
    .catch(error => {
      dispatch(fetchPlantError(error.message));
    });
};

const changeFilter = filter => ({
  type: CHANGE_FILTER,
  payload: {
    filter,
  },
});

export {
  fetchInit,
  fetchPlants,
  fetchFail,
  fetchCategories,
  changeFilter,
  fetchPlant,
  fetchPlantBySlug,
  selectPlant,
};
