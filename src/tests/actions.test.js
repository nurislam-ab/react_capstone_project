import {
  fetchInit,
  fetchMeals,
  fetchFail,
  fetchCategories,
} from '../actions/index';

describe('Get meals and categories', () => {
  const content = {
    meals: [
      {
        strMeal: 'BeaverTails',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/ryppsv1511815505.jpg',
        idMeal: '52928',
      },
    ],
  };

  const categoriesList = {
    categories: [
      {
        idCategory: '1',
        strCategory: 'Beef',
        strCategoryThumb: 'https://www.themealdb.com/images/category/beef.png',
      },
    ],
  };

  const response = fetchInit();
  const meals = fetchMeals(content);
  const failure = fetchFail();
  const categories = fetchCategories(categoriesList);

  it('Should return FETCH_INIT', () => {
    expect(response.type).toEqual('FETCH_INIT');
  });

  it('Should return FETCH_MEALS', () => {
    expect(meals.type).toEqual('FETCH_MEALS');
  });

  it('Should return data', () => {
    expect(meals.payload.meals).toEqual(content);
  });

  it('Should return FETCH_FAIL', () => {
    expect(failure.type).toEqual('FETCH_FAIL');
  });

  it('Should return FETCH_CATEGORY', () => {
    expect(categories.type).toEqual('FETCH_CATEGORY');
  });

  it('Should return categories', () => {
    expect(categories.payload.categories).toEqual(categoriesList);
  });
});
