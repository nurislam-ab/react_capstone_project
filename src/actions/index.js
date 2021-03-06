import axios from 'axios';
import {
  FETCH_INIT,
  FETCH_MEALS,
  FETCH_FAIL,
  CHANGE_FILTER,
  FETCH_CATEGORY,
  FETCH_INIT_MEAL,
  SELECT_MEAL,
  FETCH_MEAL_ERROR,
  FETCH_SUCCESS,
} from './actionTypes';

const fetchInit = () => ({
  type: FETCH_INIT,
});

const fetchMeals = content => ({
  type: FETCH_MEALS,
  payload: {
    meals: content,
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

const selectMeal = slug => ({
  type: SELECT_MEAL,
  slug,
});

const fetchSuccess = data => ({
  type: FETCH_SUCCESS,
  payload: data,
});

const fetchInitMeal = () => ({
  type: FETCH_INIT_MEAL,
});

const fetchMealError = error => ({
  type: FETCH_MEAL_ERROR,
  payload: error,
});

const fetchMealBySlug = slug => dispatch => {
  const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
  const url = `${BASE_URL}${slug}`;
  dispatch(fetchInitMeal());
  axios.get(url)
    .then(response => {
      dispatch(fetchSuccess(response.data.meals));
    })
    .catch(error => {
      dispatch(fetchMealError(error.message));
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
  fetchMeals,
  fetchFail,
  fetchCategories,
  changeFilter,
  fetchMealBySlug,
  selectMeal,
  fetchSuccess,
};
