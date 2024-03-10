import React, { useContext } from 'react';
import './LandingPage.css';
import PizzaContext from '../../Context/PizzaContext';
import PizzaList from '../../Components/PizzaList/PizzaList';
import PizzaSlider from '../../Components/PizzaSlider/PizzaSlider';

const LandingPage = () => {

const {pizzas} = useContext(PizzaContext)
  return (
    <div className="LandingPage">
      <PizzaSlider />
      <div className="PizzaList">
        <h2 id="landingPageTitle">THE BEST PIZZA IN TOWN</h2>
        <p style={{ margin: 2, color: '#2c3e50', fontWeight: 'bold' }}>Delicious pizzas made with the finest ingredients.</p>
        <p style={{ margin: 2, color: '#2c3e50', fontWeight: 'bold' }}>Indulge in the mouthwatering flavors of our specialty pizzas.</p>
        <p style={{ margin: 2, color: '#2c3e50', fontWeight: 'bold' }}>Experience pizza perfection with every bite.</p>
       <PizzaList
       />
      </div>
    </div>
  );
};

export default LandingPage;
