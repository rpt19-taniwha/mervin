import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/src/components/App.jsx';
import Review from '../client/src/components/Review.jsx';
import Selection from '../client/src/components/Selection.jsx';

import { mockData } from './sample/sample_test.js'

Enzyme.configure({ adapter: new Adapter() });

describe('Client App component', () => {

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

  it('should render product name', async done => {
    const wrapper = shallow(<App/>);
    wrapper.setState(mockData)
    const text = wrapper.find('.name-component');
    expect(text.text()).toBe('PokéNatomy: The Science of Pokémon (An Unofficial Guide)')
    done();
  });

})


describe('Client Review component', () => {

  it('should render the correct number of stars', async done => {
    const wrapper = shallow(<Review/>);
    wrapper.setState({stars: 5, reviews: 0});
    var stars = wrapper.find('img');
      // console.log(stars.debug())
    expect(stars).toHaveLength(5);

    wrapper.setState({stars: 4, reviews: 0});
    stars = wrapper.find('img');
    expect(stars).toHaveLength(4);

    wrapper.setState({stars: 4.2, reviews: 0});
    stars = wrapper.find('img');
    expect(stars).toHaveLength(5);

    done();
  });

})



describe('Client Price component', () => {

  it('should render price', async done => {
    const wrapper = mount(<App/>);
    wrapper.mount();
    expect(wrapper.find('.price-component').text()).toBeTruthy();
    done();
  });

})

describe('Client Selection component', () => {

  it('should render version and options', async done => {
    const wrapper = shallow(<Selection product={mockData}/>);
    var version = wrapper.find('.selection-label');
    expect(version.at(0).text()).toBe('Style');
    var options = wrapper.find('.selection-dropdown');
    expect(options.at(0).find('option')).toHaveLength(3);
    done();
  });

  it('should render quantity', async done => {
    const wrapper = shallow(<Selection product={mockData}/>);
    var version = wrapper.find('.selection-label');
    expect(version.at(1).text()).toBe('Quantity');
    done();
  });

})

describe('Client Distribution component', () => {

  it('should render delivery', async done => {
    const wrapper = mount(<App/>);
    wrapper.mount()
    var delivery = wrapper.find('.delivery-wrapper');
    expect(delivery).toHaveLength(1)
    done();
  });

  it('should render remaining', async done => {
    const wrapper =  mount(<App/>);
    wrapper.mount();
    var remaining = wrapper.find('.remaining-wrapper');
    expect(remaining).toHaveLength(1);
    done();
  });

})