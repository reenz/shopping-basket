import React, { Component } from 'react';

class Products extends Component {
  constructor(props) {
    super(props);
    this.handleQtyChange = this.handleQtyChange.bind(this);
    this.clear = this.clear.bind(this);
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

  clear() {
    this.state.data.forEach(product => {
      product.quantity = 0;
    });
    const newState = this.state;
    newState.data.quantity = 0;
    this.setState(newState);
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
        <td id="itemPrice">${product.quantity * product.price}</td>
      </tr>
    ));

    return (
      <div className="product-container">
        <table className="product-table">
          <tbody>
            {products}
            <tr className="checkout">
              <td id="computeTotal">$ {this.computeTotal()} </td>
              <td>
                <button id="clear" type="button" onClick={this.clear}>
                  Clear
                </button>
              </td>
              <td>
                <button id="checkout" type="button">
                  Check Out >
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default Products;
