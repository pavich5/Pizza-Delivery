import React, { useContext } from "react";
import "./CartPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import PizzaContext from "../../Context/PizzaContext";
const CartPage = () => {
const { removeFromCart ,pizzas,getPizzasInCart } = useContext(PizzaContext);
  const pizzasInCart = getPizzasInCart();
  const subtotal = pizzasInCart.reduce((total, pizza) => {
    return total + pizza.price * pizza.quantity;
  }, 0);
  return (
    <div className="cart-container">
      {pizzasInCart.length > 0 ? (
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Size</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {pizzasInCart.map((pizza) => (
              <tr key={pizza.id} className="cart-item">
                <td>
                  <div className="item-image">
                    <img src={pizza.image} alt="Pizza" />
                  </div>
                </td>
                <td>{pizza.title}</td>
                <td>
                  {((pizza.ingredients.doubleIngredient &&
                    "Double Ingredient, ") ||
                    "") +
                    ((pizza.ingredients.extraCheese && "Extra Cheese, ") ||
                      "") +
                    ((pizza.ingredients.garlicSauce && "Garlic Sauce, ") ||
                      "") +
                    ((pizza.ingredients.spicySauce && "Spicy Sauce, ") ||
                      "") ||
                    "None"}
                </td>
                <td>{pizza.size}</td>
                <td>${pizza.price}</td>
                <td>{pizza.quantity}</td>
                <td>${(pizza.price * pizza.quantity).toFixed(2)}</td>
                <td>
                  <button
                    className="removeFromCart"
                    onClick={() => removeFromCart(pizza)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="noItems">
            <p className="empty-cart">
  <FontAwesomeIcon icon={faShoppingCart} /> No pizzas in the cart
</p>
        </div>

      )}
      <div className="cardTotal">
        <h2>Card Total</h2>
        <div className="pricing">
          <p>Subtotal: ${subtotal.toFixed(2)}</p>
          <p>Discount: $0.00</p>
          <p>Total: ${subtotal.toFixed(2)}</p>
          <button className="checkout-button">CHECKOUT NOW!</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
