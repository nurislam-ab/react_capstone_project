import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchMealBySlug, selectMeal } from '../actions/index';
import MealPreviewCard from '../components/MealPreviewCard/MealPreviewCard';

const MealsList = ({ meals, selectMeal, fetchMealBySlug }) => {
  const handleFetchMeal = meal => {
    selectMeal(meal.idMeal);
    fetchMealBySlug(meal.idMeal);
  };

  const renderMeals = meals.map(meal => (
    <MealPreviewCard
      meal={meal}
      key={meal.idMeal}
      clickHandler={() => handleFetchMeal(meal)}
    />
  ));

  return (
    <div className="meals-list">
      {renderMeals}
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  selectMeal: idMeal => dispatch(selectMeal(idMeal)),
  fetchMealBySlug: idMeal => dispatch(fetchMealBySlug(idMeal)),
});

MealsList.propTypes = {
  meals: PropTypes.arrayOf(PropTypes.object),
  selectMeal: PropTypes.func.isRequired,
  fetchMealBySlug: PropTypes.func.isRequired,
};

MealsList.defaultProps = {
  meals: [],
};

export default connect(null, mapDispatchToProps)(MealsList);
