import React from 'react';
import App from '../App.js';
import { configure, shallow } from 'enzyme';
configure({ adapter: new Adapter() });

import Adapter from 'enzyme-adapter-react-16';

describe('Headings', () => {
  it('renders basket heading', () => {
    const wrapper = shallow(<App />);
    const heading = <h2>Basket</h2>;
    expect(wrapper.contains(heading)).toEqual(true);
  });
});
