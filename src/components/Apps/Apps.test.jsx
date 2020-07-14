import React from 'react';
import { shallow } from 'enzyme';
import Apps from './Apps';

describe('App component', () => {
  it('renders App', () => {
    const wrapper = shallow(<Apps />);
    expect(wrapper).toMatchSnapshot();
  });
});
