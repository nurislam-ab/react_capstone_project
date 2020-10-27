import { SELECT_PLANT } from '../actions/actionTypes';

const plantSelectedReducer = (state = null, action) => {
  switch (action.type) {
    case SELECT_PLANT:
      return {
        type: action.slug,
      };
    default:
      return state;
  }
};

export default plantSelectedReducer;
