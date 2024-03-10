import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiPhoneCall } from 'react-icons/fi';
import { FaShoppingCart } from 'react-icons/fa';
import './Header.css';
import cart from '../../assets/img/cart.png'
import logo from '../../assets/img/logo.png'
import telephone from '../../assets/img/telephone.png'
import PizzaContext from '../../Context/PizzaContext';


const Header = () => {
  const {getPizzasInCart} = useContext(PizzaContext)
  const PizzasInCart = getPizzasInCart()
  return (
    <div className="container navbar-container">
      <div className="item navbar-item">
        <div className="callButton navbar-callButton">
          <img src={telephone} alt="" className="phone-icon" />
        </div>
        <div className="texts navbar-texts">
          <div className="text navbar-text">ORDER NOW!</div>
          <div className="text navbar-text">012 345 678</div>
        </div>
      </div>
      <div className="item navbar-item">
        <ul className="list navbar-list">
          <li className="listItem navbar-listItem">
            <NavLink exact to="/" activeClassName="active">Home</NavLink>
          </li>
          <li className="listItem navbar-listItem">
            <NavLink activeClassName="active">Products</NavLink>
          </li>
          <li className="listItem navbar-listItem">
            <NavLink to="/menu" activeClassName="active">Menu</NavLink>
          </li>
          <li className="listItem logo">
            <NavLink to="/menu" activeClassName="active">
              <img src={logo} alt="" />
            </NavLink>
          </li>
          <li className="listItem navbar-listItem">
            <NavLink to="/events" activeClassName="active">Events</NavLink>
          </li>
          <li className="listItem navbar-listItem">
            <NavLink to="/blog" activeClassName="active">Blog</NavLink>
          </li>
          <li className="listItem navbar-listItem">
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
          </li>
        </ul>
      </div>
      <div className="item navbar-item">
        <div className="cart navbar-cart">
          <Link to={'/cart'}>
          <img src={cart} alt="" className='cart-icon'/>
          <div className="counter navbar-counter">{PizzasInCart.length}</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
