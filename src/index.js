import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/index.scss';
import App from './components/App';

const plantIds = () => Math.ceil(Math.random() * 100);

const plantTitles = [
  'Almond',
  'Bean',
  'Baobab',
  'Wineberry',
  'Tomato',
  'Strawberry',
  'Mango',
];

const families = [
  'Beech',
  'Nettle',
  'Grass',
  'Aster',
  'Buttercup',
  'Pea',
  'Olive',
];

const contentRandom = () => Math.floor(Math.random() * families.length);

const plants = [];

for (let i = 0; i < plantTitles.length; i += 1) {
  plants[i] = {
    plantId: plantIds(),
    title: plantTitles[i],
    content: families[contentRandom()],
  };
}

const initialState = {
  plants,
};

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
