import React from 'react';
import '../assets/scss/App.scss';
import PlantsList from '../containers/PlantsList';
import Header from './Header';

const App = () => {
  console.log('reach the app');

  return (
    <div className="App">
      <Header />
      <main>
        <PlantsList />
      </main>
    </div>
  );
};

export default App;
