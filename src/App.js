import React from 'react';
import './App.css';

const menuData = {
  m1: {
    description: 'Chicken Fried Rice',
    name: 'FriedRice',
    price: 150.00,
  },
  m2: {
    description: 'Mutton Briyani',
    name: 'Briyani',
    price: 175.00,
  },
  m3: {
    description: 'Idly with Vada',
    name: 'Idly',
    price: 50.00,
  },
  m4: {
    description: 'Dosai with potato masala',
    name: 'Dosai',
    price: 55.00,
  },
};

const App = () => {
  return (
    <div className="app">
      <div className="menu-container">
        {Object.values(menuData).map((menuItem) => (
          <div className="menu-item" key={menuItem.name}>
            <h2 className="menuname">{menuItem.name}</h2>
            <p className="descrip">{menuItem.description}</p>
            <p className="price">₹{menuItem.price.toFixed(2)}</p>
            <hr className="menu-item-divider" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;