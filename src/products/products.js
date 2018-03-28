import React, { Component } from 'react';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.productList || []
    };
  }

  render() {
    const products = this.state.data.map(product => (
      <tr key={product.name}>
        <td>{product.name}</td>
        <td>
          <input
            type="text"
            id={product.name}
            className="quantity"
            value={product.quantity}
          />
        </td>
        <td>${product.price}</td>
      </tr>
    ));

    return (
      <div className="product-container">
        <table className="product-table">
          <tbody>{products}</tbody>
        </table>
      </div>
    );
  }
}
export default Products;
