import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { PizzaProvider } from "./Context/PizzaContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <PizzaProvider>
      <App />
    </PizzaProvider>
  </BrowserRouter>
);
