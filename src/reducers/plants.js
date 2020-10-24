import {
  FETCH_INIT,
  FETCH_PLANTS,
  FETCH_FAIL,
} from '../actions/actionTypes';

const initialState = {
  loading: false,
  error: false,
  plants: [],
};

const plantReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INIT:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case FETCH_PLANTS:
      return {
        ...state,
        loading: false,
        error: false,
        plants: action.payload.plants,
      };
    case FETCH_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default plantReducer;
