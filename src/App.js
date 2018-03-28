import React, { Component } from 'react';
import Products from './products/products.js';

const productList = [
  { name: 'Mountain Dew' },
  { name: 'Desperados' },
  { name: 'Jack Daniels' }
];

class App extends Component {
  render() {
    return (
      <div classname="app">
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
