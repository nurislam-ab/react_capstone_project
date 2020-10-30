import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import { getMeals, getAllFamilies } from '../../api/client';
import MealsList from '../../containers/MealsList';
import CategoryFilter from '../CategoryFilter/CategoryFilter';
import { getMealFamiliesList, getMealsList } from '../../selectors/index';
import {
  fetchInit,
  fetchMeals,
  fetchFail,
  fetchCategories,
} from '../../actions/index';

const Home = ({
  meals,
  categories,
  loading,
  error,
  fetchInit,
  fetchMeals,
  fetchFail,
  fetchCategories,
}) => {
  const filter = useSelector(store => store.filterReducer);

  const handleFetchMeals = async () => {
    fetchInit();

    try {
      const result = await getMeals(filter);
      const categories = await getAllFamilies();
      fetchMeals(result);
      fetchCategories(categories);
    } catch (e) {
      fetchFail();
    }
  };

  const handleFilterChange = async category => {
    const filteredMeals = await getMeals(category);
    fetchMeals(filteredMeals);
  };

  useEffect(() => {
    handleFetchMeals();
  }, []);

  return (
    <>
      <CategoryFilter categories={categories} onFilter={handleFilterChange} />
      {error && <p>Something went wrong</p>}
      {loading ? (
        <p>Data is loading</p>
      ) : (
        <>
          <MealsList meals={meals} />
        </>
      )}
    </>
  );
};

const mapStateToProps = state => {
  const { meals: { loading, error } } = state;
  const meals = getMealsList(state);
  const categories = getMealFamiliesList(state);
  return {
    meals,
    categories,
    loading,
    error,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchInit: () => dispatch(fetchInit()),
  fetchMeals: result => dispatch(fetchMeals(result)),
  fetchFail: () => dispatch(fetchFail()),
  fetchCategories: categories => dispatch(fetchCategories(categories)),
});

Home.propTypes = {
  meals: PropTypes.arrayOf(PropTypes.object),
  categories: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  error: PropTypes.bool,
  fetchInit: PropTypes.func.isRequired,
  fetchMeals: PropTypes.func.isRequired,
  fetchFail: PropTypes.func.isRequired,
  fetchCategories: PropTypes.func.isRequired,
};

Home.defaultProps = {
  meals: [],
  categories: [],
  loading: false,
  error: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
