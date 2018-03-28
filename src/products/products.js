import React, { Component } from 'react';

class Products extends Component {
  constructor(props) {
    super(props);
    this.handleQtyChange = this.handleQtyChange.bind(this);
    this.state = {
      data: props.productList || []
    };
  }

  handleQtyChange(event) {
    let qty = event.target.value;
    const newState = this.state;
    newState.data[event.target.id].quantity = qty;
    this.setState(newState);
  }

  computeTotal() {
    let total = this.state.data
      .map(product => {
        return product.price * product.quantity;
      })
      .reduce((a, b) => a + b, 0);
    return total;
  }

  render() {
    const products = this.state.data.map((product, index) => (
      <tr key={product.name}>
        <td>{product.name}</td>
        <td>
          <input
            type="text"
            id={index}
            name="qty"
            className="quantity"
            value={product.quantity}
            onChange={this.handleQtyChange}
          />
        </td>
        <td>${product.quantity * product.price}</td>
      </tr>
    ));

    return (
      <div className="product-container">
        <table className="product-table">
          <tbody>
            {products}
            <tr>
              <td>$ {this.computeTotal()} </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default Products;
