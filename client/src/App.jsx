import Category from './components/Category.jsx'
import Review from './components/Review.jsx'
import Price from './components/Price.jsx'
import Name from './components/Name.jsx'
import Selection from './components/Selection.jsx'
import Distribution from './components/Distribution.jsx'
import Highlight from './components/Highlight.jsx'
import Description from './components/Description.jsx'
import $ from 'jquery'
import {BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from 'react-router-dom'
import productParser from './components/helper/helper.js'

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    console.log(document.location.pathname);
    var productNumber = productParser(document.location.pathname)
    $.ajax({
      method: 'GET',
      url: `/products/${productNumber}`,
      success: function(results) {
        console.log(results)
        this.setState(results)
      }.bind(this)
    })
  }

  render() {
    return (
      <div className="product-service-container col-sm-4 col-md-4 col-lg-4">
        <div className="category-review-wrapper">
          <Category product={this.state}/>
          <Review/>
        </div>
        <Name/>
        <Price/>
        <Selection/>
        <Distribution/>
        <Highlight/>
        <Description/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('product-service'))