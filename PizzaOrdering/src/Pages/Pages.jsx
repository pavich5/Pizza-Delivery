import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import PizzaDetails from './PizzaDetails/PizzaDetails';
import CartPage from './CartPage/CartPage';
import '../Pages.css'
import ContactUs from './ContactUs/ContactUs';
import PizzaList from '../Components/PizzaList/PizzaList';
import MenuPage from './MenuPage/MenuPage';
const Pages = ({
  pizzas,
  addToCartPizza,
  getPizzasInCart,
  removeFromCart,
  addedPizzas,
}) => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage pizzas={pizzas} />} />
      <Route
        path="/:id"
        element={
          <PizzaDetails
            pizzas={pizzas}
            addToCartPizza={addToCartPizza}
            addedPizzas={addedPizzas}
          />
        }
      />
      <Route
        path="/cart"
        element={
          <CartPage
            pizzas={pizzas}
            getPizzasInCart={getPizzasInCart}
            removeFromCart={removeFromCart}
          />
        }
      />
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path='/menu' element={<MenuPage/>}/>

    </Routes>
  );
};

export default Pages;
