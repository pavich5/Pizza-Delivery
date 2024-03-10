import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { PizzaProvider } from './Context/PizzaContext';

ReactDOM.render(
  <BrowserRouter>
      <PizzaProvider>
      <App />
    </PizzaProvider>
  </BrowserRouter>
 ,
  document.getElementById('root')
);
