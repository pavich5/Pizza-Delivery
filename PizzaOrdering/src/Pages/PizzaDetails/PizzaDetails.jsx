import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import pizzaSize from "../../assets/img/size.png";
import "./PizzaDetails.css";
import PizzaContext from "../../Context/PizzaContext";

const PizzaDetails = () => {
  const { id: pizzaId } = useParams();
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [ingredients, setIngredients] = useState({
    doubleIngredient: false,
    extraCheese: false,
    spicySauce: false,
    garlicSauce: false,
  });
  const [selectedSize, setSelectedSize] = useState("Small");
  const {addToCartPizza,pizzas,addedPizzas} = useContext(PizzaContext)

  useEffect(() => {
    const pizza = pizzas.find((pizza) => pizza.id === parseInt(pizzaId));
    setSelectedPizza(pizza);
  }, [pizzaId, pizzas]);

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  const handleIngredientChange = (event) => {
    const { name, checked } = event.target;
    setIngredients((prevIngredients) => ({
      ...prevIngredients,
      [name]: checked,
    }));
  };

  const getPizzaPrice = (basePrice, size, ingredients) => {
    let totalPrice = basePrice;

    switch (size) {
      case "Small":
        totalPrice += 0;
        break;
      case "Medium":
        totalPrice += 5;
        break;
      case "Large":
        totalPrice += 10;
        break;
      default:
        totalPrice += 0;
    }

    Object.values(ingredients).forEach((ingredient) => {
      if (ingredient) {
        totalPrice += 1;
      }
    });

    return Number(totalPrice.toFixed(2));
  };

  const handleAddToCart = () => {
    if (isAddedToCart || addedPizzas.includes(selectedPizza.id)) {
      return; 
    }
    const pizzaPrice = getPizzaPrice(
      selectedPizza.price,
      selectedSize,
      ingredients
    );
    const pizzaWithIngredients = {
      ...selectedPizza,
      size: selectedSize,
      quantity,
      ingredients,
      totalPrice: pizzaPrice,
    };
    addToCartPizza(pizzaWithIngredients);
    setIsAddedToCart(true);
  };

  return (
    <div className="PizzaDetails">
      {selectedPizza ? (
        <div className="showedPizza">
          <div className="pizzaDetailsImage">
            <img src={selectedPizza.image} alt="Pizza" />
          </div>
          <div className="pizzaInformations">
            <p style={{ fontWeight: "bold", fontSize: "31px" }}>
              {selectedPizza.title}
            </p>
            <p className="pizzaPrice">
              ${getPizzaPrice(selectedPizza.price, selectedSize, ingredients)}
            </p>
            <p className="pizzaDescription">{selectedPizza.description}</p>
            <p className="chooseSize">Choose the size</p>
            <div className="pizzaSizeLabel">
              <div className="pizzaSizeImages">
                <img
                  src={pizzaSize}
                  alt=""
                  className={`pizzaSizeImage3 ${
                    selectedSize === "Small" ? "selected" : ""
                  }`}
                  onClick={() => handleSizeSelection("Small")}
                />
                <img
                  src={pizzaSize}
                  alt=""
                  className={`pizzaSizeImage2 ${
                    selectedSize === "Medium" ? "selected" : ""
                  }`}
                  onClick={() => handleSizeSelection("Medium")}
                />
                <img
                  src={pizzaSize}
                  alt=""
                  className={`pizzaSizeImage1 ${
                    selectedSize === "Large" ? "selected" : ""
                  }`}
                  onClick={() => handleSizeSelection("Large")}
                />
              </div>
              <p className={`selectedPizza ${selectedSize ? "visible" : ""}`}>
                You selected {selectedSize} pizza
              </p>
            </div>
            <p className="additionalIngridiance">
              Choose additional ingredients
            </p>
            <div className="Ingredients">
              <input
                type="checkbox"
                id="doubleIngredient"
                name="doubleIngredient"
                checked={ingredients.doubleIngredient}
                onChange={handleIngredientChange}
              />
              <label htmlFor="doubleIngredient">Double Ingredient</label>
              <br />
              <input
                type="checkbox"
                id="extraCheese"
                name="extraCheese"
                checked={ingredients.extraCheese}
                onChange={handleIngredientChange}
              />
              <label htmlFor="extraCheese">Extra Cheese</label>
              <br />
              <input
                type="checkbox"
                id="spicySauce"
                name="spicySauce"
                checked={ingredients.spicySauce}
                onChange={handleIngredientChange}
              />
              <label htmlFor="spicySauce">Spicy Sauce</label>
              <br />
              <input
                type="checkbox"
                id="garlicSauce"
                name="garlicSauce"
                checked={ingredients.garlicSauce}
                onChange={handleIngredientChange}
              />
              <label htmlFor="garlicSauce">Garlic Sauce</label>
            </div>
            <div className="addToCardSection">
              <input
                type="number"
                className="quantity"
                value={quantity}
                onChange={handleQuantityChange}
              />
              <button
                className="addToCardButton"
                onClick={handleAddToCart}
                disabled={
                  isAddedToCart || addedPizzas.includes(selectedPizza.id)
                }
              >
                {isAddedToCart || addedPizzas.includes(selectedPizza.id)
                  ? "Added"
                  : "Add to cart"}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PizzaDetails;
