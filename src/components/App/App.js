import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Home from '../Home/Home';
import Meal from '../Meal/Meal';

const App = () => {
  const meal = useSelector(store => store.mealItemReducer.meal[0]);
  return (
    <>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          {
            meal ? (
              <Route exact path={`/meals/${meal.idMeal}`}>
                <Meal meal={meal} />
              </Route>
            ) : null
          }
        </Switch>
      </main>
    </>
  );
};

export default App;
