import React from 'react';
import Products from '../products/products.js';
import { configure, shallow } from 'enzyme';
configure({ adapter: new Adapter() });

import Adapter from 'enzyme-adapter-react-16';

describe('Products', () => {
  it('renders the name of the products in basket', () => {
    const wrapper = shallow(<Products />);
    expect(wrapper.exists(<table classname="product-table" />)).toBe(true);
  });
});
