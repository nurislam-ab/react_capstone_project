import { FETCH_INIT_PLANT, FETCH_SUCCESS, FETCH_PLANT_ERROR } from '../actions/actionTypes';

const initialState = {
  plant: [],
  error: '',
};

const plantItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INIT_PLANT:
      return {
        ...state,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        plant: action.payload,
        error: '',
      };
    case FETCH_PLANT_ERROR:
      return {
        ...state,
        plant: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default plantItemReducer;
