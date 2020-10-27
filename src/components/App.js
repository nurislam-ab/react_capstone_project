import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import '../assets/scss/App.scss';
import Header from './Header';
import Home from './Home';
import Plant from './Plant';

const App = () => {
  const plant = useSelector(store => store.plantItemReducer.plant.data);
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          {
            plant ? (
              <Route exact path={`/plants/${plant.slug}`}>
                <Plant plant={plant} />
              </Route>
            ) : null
          }
        </Switch>
      </main>
    </div>
  );
};

export default App;
