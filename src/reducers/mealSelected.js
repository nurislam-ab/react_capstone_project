import { SELECT_MEAL } from '../actions/actionTypes';

const mealSelectedReducer = (state = null, action) => {
  switch (action.type) {
    case SELECT_MEAL:
      return {
        type: action.slug,
      };
    default:
      return state;
  }
};

export default mealSelectedReducer;
