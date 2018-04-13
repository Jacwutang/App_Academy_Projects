import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import App from './components/app';
import Root from './components/root';
import selector from './reducers/selectors';

document.addEventListener("DOMContentLoaded", () => {
  let store = configureStore();
  window.store = store;
  
  const main = document.getElementById("main");

  ReactDOM.render(<Root store={store} />, main);


});
