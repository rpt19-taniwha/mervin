import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Name from '../client/src/components/Name.jsx';

Enzyme.configure({ adapter: new Adapter() });
var mockData = { productName: 'PokéNatomy: The Science of Pokémon (An Unofficial Guide)' }
describe('Client', () => {
  it('should render ', done => {
    const wrapper = shallow(<Name product={mockData}/>);
    const text = wrapper.find('.name-component');
    expect(text.text()).toBe('PokéNatomy: The Science of Pokémon (An Unofficial Guide)')
    done();
  });
})
