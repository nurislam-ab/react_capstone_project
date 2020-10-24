import axios from 'axios';
import {
  FETCH_INIT,
  FETCH_PLANTS,
  FETCH_FAIL,
  CHANGE_FILTER,
  FETCH_CATEGORY,
} from './actionTypes';

import { FILTERED_PLANTS_BY_FAMILY } from '../api/client';

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

const fetchPlantsByCategories = category => dispatch => {
  const url = FILTERED_PLANTS_BY_FAMILY`${category}`;

  dispatch(fetchInit());
  axios.get(url)
    .then(responce => {
      dispatch(fetchPlants(responce.data.plants));
    })
    .catch(e => {
      dispatch(fetchFail(e.message));
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
  fetchPlantsByCategories,
};
