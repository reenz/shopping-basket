import React, { Component } from 'react';
import Products from './products/products.js';

class App extends Component {
  render() {
    return (
      <div classname="app">
        <div>
          <h2>Basket</h2>
        </div>
        <div>
          <Products />
        </div>
      </div>
    );
  }
}

export default App;
