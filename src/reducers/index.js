import { combineReducers } from 'redux';
import categoryReducer from './categories';
import mealReducer from './meals';
import filterReducer from './filter';
import mealItemReducer from './meal';
import mealSelectedReducer from './mealSelected';

const rootReducer = combineReducers({
  meals: mealReducer,
  categories: categoryReducer,
  filterReducer,
  mealItemReducer,
  mealSelectedReducer,
});

export default rootReducer;
