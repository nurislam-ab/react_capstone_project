import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Home from '../Home/Home';
import Plant from '../Plant/Plant';

const App = () => {
  const plant = useSelector(store => store.plantItemReducer.plant[0]);
  return (
    <>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          {
            plant ? (
              <Route exact path={`/plants/${plant.idMeal}`}>
                <Plant plant={plant} />
              </Route>
            ) : null
          }
        </Switch>
      </main>
    </>
  );
};

export default App;
