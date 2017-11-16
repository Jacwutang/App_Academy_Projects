import React from 'react';
import ReactDOM from 'react-dom';
import { RECEIVE_ALL_POKEMON, receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
import { fetchAllPokemon } from './util/api_util';
import configureStore from './store/store';
import selectAllPokemon from './reducers/selectors';


document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;


  const rootEl = document.getElementById("root");
  ReactDOM.render(<h1>Hi</h1>, rootEl);

  window.selectAllPokemon = selectAllPokemon;
  window.fetchAllPokemon = fetchAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  window.requestAllPokemon = requestAllPokemon;
});
