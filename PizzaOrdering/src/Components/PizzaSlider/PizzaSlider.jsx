import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import './PizzaSlider.css';
import pizzaData from '../../Data/Pizzas.json';

const PizzaSlider = () => {
  return (
    <div className="PizzaSlider">
      <div className="pizza-slider-wrapper">
        <Splide
          options={{
            type: 'slide',
            perPage: 1,
            perMove: 1,
            pauseOnHover: false,
            arrows: true,
            pagination: false,
          }}
        >
          {pizzaData.map((pizza) => (
            <SplideSlide key={pizza.id}>
              <div className="pizza-card">
                <div className="pizza-info">
                  <div className="pizzaDetails">
                  <h3>{pizza.title}</h3>
                  <div className="line"></div>
                  <p>50% OFF</p>
                  <div className="paragraphLine"></div>
                  <p>ORDER NOW</p>
                  <div className="paragraphLine"></div>
                  <p id='lamapizza'>Lama Pizza</p>
                  </div>
                </div>
                <div className="pizza-image">
                  <img src={pizza.image} alt={pizza.title} />
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default PizzaSlider;