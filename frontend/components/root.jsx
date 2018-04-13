import React from 'react';

//this does not work without braces?
import {Provider} from 'react-redux';

//this does not work WITH braces.
import App from './app';

const Root = ({ store }) => {

  return (

  <Provider store={ store }>
    <App />


  </Provider>
  );

};






export default Root;
