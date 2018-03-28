import React, { Component } from 'react';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: 'Mountain Dew'
        },
        {
          name: 'Desperados'
        },
        {
          name: 'Jack Daniels'
        }
      ]
    };
  }

  render() {
    const products = this.state.data.map(product => (
      <tr key={product.name}>
        <td>{product.name}</td>
      </tr>
    ));

    return (
      <div classname="product-container">
        <table classname="product-table">
          <tbody>{products}</tbody>
        </table>
      </div>
    );
  }
}
export default Products;
