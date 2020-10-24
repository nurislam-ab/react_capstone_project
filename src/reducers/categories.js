import { FETCH_CATEGORY } from '../actions/actionTypes';

const initialState = {
  categories: [],
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORY:
      console.log('category reducer action payload:', action.payload);
      return {
        ...state,
        loading: false,
        error: false,
        categories: action.payload.categories,
      };
    default:
      return state;
  }
};

export default categoryReducer;
