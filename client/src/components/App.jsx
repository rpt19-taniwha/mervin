import React from 'react';
import $ from 'jquery';
import Review from './Review.jsx';
import Price from './Price.jsx';
import Selection from './Selection.jsx';
import Distribution from './Distribution.jsx';
import Highlight from './Highlight.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      productNumber: 0,
      productName: '',
      productDescription: '',
      productCategory: '',
      versions: {}
    }
    this.product = this.product.bind(this);
  }

  componentDidMount() {
    this.product();
  }

  product () {
    var productNumber = window.location.pathname.split('/')[2]
    $.ajax({
      method: 'GET',
      url: `http://ec2-18-144-174-63.us-west-1.compute.amazonaws.com:9000/products/${productNumber}`,
      success: results => {this.setState(results)},
      error: err => { throw err }
    })
  }

  sales () {
    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    var sold = numberWithCommas(Math.floor(Math.random() * 2000));
    return (<div className="sales">{`${sold} sales`}</div>)
  }

  description (string) {
    string = string.replace(/\n/g, "\n\n");
    return string;
  }

  render() {
    return (
      <div className="product-service-container">
        <div className="category-review-wrapper">
          <span className="category-component">
            {this.state.productCategory}
          </span>
          <div className="category-divider">|</div>
          {this.sales()}
          <div className="category-divider">|</div>
          <Review/>
        </div>
          <div className="name-component">
            {this.state.productName}
          </div>
        <Price/>
        <Selection product={this.state}/>
        <Distribution/>
        <Highlight product={this.state}/>
        <div className="description-component">
          {this.description(this.state.productDescription)}
          <button className="learn-more-button">Learn more about this item</button>
          <div className="fade"></div>
        </div>
      </div>
    )
  }
}

export default App;