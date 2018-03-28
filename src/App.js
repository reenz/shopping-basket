import React, { Component } from 'react';
import Products from './products/products.js';
import './products/product.scss';

const productList = [
  {
    name: 'Mountain Dew',
    quantity: '',
    price: 1
  },
  {
    name: 'Desperados',
    quantity: '',
    price: 3
  },
  {
    name: 'Jack Daniels',
    quantity: '',
    price: 2
  }
];

class App extends Component {
  render() {
    return (
      <div className="app">
        <div>
          <h2>Basket</h2>
        </div>
        <div>
          <Products productList={productList} />
        </div>
      </div>
    );
  }
}

export default App;
