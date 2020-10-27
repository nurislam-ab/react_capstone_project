import { combineReducers } from 'redux';
import categoryReducer from './categories';
import plantReducer from './plants';
import filterReducer from './filter';
import plantItemReducer from './plant';
import plantSelectedReducer from './plantSelected';

const rootReducer = combineReducers({
  plants: plantReducer,
  categories: categoryReducer,
  filterReducer,
  plantItemReducer,
  plantSelectedReducer,
});

export default rootReducer;
