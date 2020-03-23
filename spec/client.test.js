import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Name from '../client/src/components/Name.jsx';

import { mockData } from './sample/sample_test.js'

Enzyme.configure({ adapter: new Adapter() });

describe('Client', () => {
  it('should render ', done => {
    const wrapper = shallow(<Name product={mockData}/>);
    const text = wrapper.find('.name-component');
    expect(text.text()).toBe('PokéNatomy: The Science of Pokémon (An Unofficial Guide)')
    done();
  });
})




