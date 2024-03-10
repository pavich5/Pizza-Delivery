import React from 'react';
import './PizzaList.css';
import { Link } from 'react-router-dom';
import pizzas from '../../Data/Pizzas.json';

const PizzaList = ({ category }) => {
  const splitTextByWords = (text, wordsPerLine) => {
    const words = text.split(' ');
    const lines = [];

    for (let i = 0; i < words.length; i += wordsPerLine) {
      const lineWords = words.slice(i, i + wordsPerLine);
      const line = lineWords.join(' ');
      lines.push(line);
    }

    return lines.join('<br />');
  };

  const filteredPizzas = category
    ? pizzas.filter((pizza) =>
        pizza.category.toLowerCase().includes(category.toLowerCase())
      )
    : pizzas;

  return (
    <div className="allPizzas">
      {filteredPizzas.map((pizza) => (
        <div className="pizza" key={pizza.id}>
          <Link to={`/${pizza.id}`}>
            <img src={pizza.image} alt="Pizza" />
          </Link>
          <h3 dangerouslySetInnerHTML={{ __html: splitTextByWords(pizza.title, 3) }} />
          <p>${pizza.price}</p>
          <p dangerouslySetInnerHTML={{ __html: splitTextByWords(pizza.description, 3) }} />
        </div>
      ))}
    </div>
  );
};

export default PizzaList;
