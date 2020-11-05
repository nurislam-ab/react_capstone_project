const getMealsState = store => store.meals.meals;

const getMealFamilies = store => store.categories.categories;

const getMealsList = store => getMealsState(store);

const getMealFamiliesList = store => getMealFamilies(store);

export {
  getMealsList,
  getMealsState,
  getMealFamiliesList,
};
