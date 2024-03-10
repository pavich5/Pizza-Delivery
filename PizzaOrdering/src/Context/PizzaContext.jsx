import { createContext,useState,useEffect } from "react";
import pizzaData from '../../src/Data/Pizzas.json';

const PizzaContext = createContext({
    pizzas: [],
    addedPizzas: [],
    addToCartPizza() {},
    getPizzasInCart() {},
    removeFromCart() {},
})

export const PizzaProvider = props => {
    const [pizzas, setPizzas] = useState([]);
    const [addedPizzas, setAddedPizzas] = useState([]);
  
    useEffect(()=>{
        console.log('this is from the contex');
    },[])
    useEffect(() => {
      setPizzas(pizzaData);
      const storedPizzas = localStorage.getItem('addedPizzas');
      if (storedPizzas) {
        setAddedPizzas(JSON.parse(storedPizzas));
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem('addedPizzas', JSON.stringify(addedPizzas));
    }, [addedPizzas]);
  
    const addToCartPizza = (pizza) => {
      const updatedPizzas = [...addedPizzas, pizza];
      setAddedPizzas(updatedPizzas);
      console.log(`Pizza added to cart: ${pizza}`);
    };
  
    const getPizzasInCart = () => {
      return addedPizzas.map((addedPizza) => {
        const pizza = pizzas.find((pizza) => pizza.id === addedPizza.id);
        return {
          ...pizza,
          quantity: addedPizza.quantity,
          ingredients: addedPizza.ingredients,
          price: addedPizza.totalPrice,
          size: addedPizza.size,
        };
      });
    };
  
    const removeFromCart = (pizza) => {
      const updatedPizzas = addedPizzas.filter(
        (addedPizza) => addedPizza.id !== pizza.id
      );
      setAddedPizzas(updatedPizzas);
    };

    return (
        <PizzaContext.Provider
        value={{pizzas,addedPizzas,addToCartPizza,getPizzasInCart,removeFromCart}}
        >
            {props.children}
        </PizzaContext.Provider>
    )
}

export default PizzaContext