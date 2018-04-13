import React from 'react';
import ReactDOM from 'react-dom';
import {fetchTodos, receiveTodo, receiveTodos} from './actions/todo_actions';


import configureStore from './store/store';
//import functional classes...
import App from './components/app';



import Root from './components/root';




document.addEventListener("DOMContentLoaded",()=>{

  const main = document.getElementById('main');
  const store = configureStore();
  window.store = store;
  window.fetchTodos = fetchTodos;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  ReactDOM.render(<Root store={store}/>,main);


}
);
