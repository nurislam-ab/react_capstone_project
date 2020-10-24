import { combineReducers } from 'redux';
import categoryReducer from './categories';
import plantReducer from './plants';
import filterReducer from './filter';

const rootReducer = combineReducers({
  plants: plantReducer,
  categories: categoryReducer,
  filterReducer,
});

export default rootReducer;
