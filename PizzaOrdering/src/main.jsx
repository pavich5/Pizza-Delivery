import React from "react";
import ReactDOM from 'react-dom/client'
import App from "./App";  
import { BrowserRouter } from "react-router-dom";
import './Pages.css'
import { PizzaProvider } from "./Context/PizzaContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <PizzaProvider>
      <App />
    </PizzaProvider>
  </BrowserRouter>
);
