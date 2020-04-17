import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/src/components/App.jsx';
import Review from '../client/src/components/Review.jsx';

import { mockData } from './sample/sample_test.js'

Enzyme.configure({ adapter: new Adapter() });

describe('Client', () => {

  it('should render category-component', async done => {
    const wrapper = shallow(<App/>);
    wrapper.setState(mockData)
    const text = wrapper.find('.category-component');
    expect(text.text()).toBe(mockData.productCategory)
    done();
  });

  it('should render sales', async done => {
    const wrapper = shallow(<App/>);
    wrapper.setState(mockData);
    expect(wrapper.find('.sales').text()).toBeTruthy();
    done();
  });

  it('should render review stars', async done => {
    const wrapper = shallow(<Review/>);
    wrapper.setState({stars: 5, reviews: 10});
    const stars = wrapper.find('img')
    console.log(stars.debug())
    expect(stars).toHaveLength(5)
    done();
  });

  it('should render productCategory', async done => {
    const wrapper = shallow(<App/>);
    wrapper.setState(mockData)
    const text = wrapper.find('.name-component');
    expect(text.text()).toBe('PokéNatomy: The Science of Pokémon (An Unofficial Guide)')
    done();
  });

  it('should render 2', async done => {
    const wrapper = shallow(<Review/>);
    const text = wrapper.find('img');
    // console.log(text)
    // expect(text.text()).toBe('PokéNatomy: The Science of Pokémon (An Unofficial Guide)')
    done();
  });
})




