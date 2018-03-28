import React from 'react';
import Products from '../products/products.js';
import { configure, shallow } from 'enzyme';
configure({ adapter: new Adapter() });

import Adapter from 'enzyme-adapter-react-16';

describe('Products table', () => {
  it('renders the name of the products in basket', () => {
    const wrapper = shallow(<Products />);
    expect(wrapper.exists(<table classname="product-table" />)).toBe(true);
  });
});

describe('Products table content', () => {
  let wrapper;
  let productList = [];

  beforeEach(() => {
    productList = [
      {
        name: 'Item1',
        price: 2
      },
      {
        name: 'Item2',
        price: 2
      }
    ];
    wrapper = shallow(<Products productList={productList} />);
  });

  it('should include the name of each item', () => {
    productList.forEach(product => {
      expect(wrapper.containsMatchingElement(<td>{product.name}</td>)).toBe(
        true
      );
    });
  });

  it('should render corresponding number of table rows', () => {
    expect(wrapper.find('tbody > tr').length).toEqual(2);
  });

  it('should include the price of each item', () => {
    productList.forEach(product => {
      console.log(product.price);
      console.log(wrapper.html());

      expect(wrapper.containsMatchingElement(<td>${product.price}</td>)).toBe(
        true
      );
    });
  });
});
