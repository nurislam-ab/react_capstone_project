import { combineReducers } from 'redux';
import plantReducer from './plants';

const rootReducer = combineReducers({
  plants: plantReducer,
});

export default rootReducer;
