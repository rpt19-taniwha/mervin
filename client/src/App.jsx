import Review from './components/Review.jsx';
import Price from './components/Price.jsx';
import Selection from './components/Selection.jsx';
import Distribution from './components/Distribution.jsx';
import Highlight from './components/Highlight.jsx';
import $ from 'jquery';
import './style.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      productNumber: 0,
      productName: '',
      productDescription: '',
      productCategory: '',
      versions: {}
    }
  }

  componentDidMount() {
    var productNumber = document.location.pathname.split('/')[2]
    $.ajax({
      method: 'GET',
      url: `http://ec2-18-144-174-63.us-west-1.compute.amazonaws.com:9000/products/${productNumber}`,
      success: results => { this.setState(results) },
      error: err => { console.log(err) }
    })
  }

  render() {
    return (
      <div className="product-service-container">
        <div className="category-review-wrapper">
          <div className="category-component">
            {this.state.productCategory}
          </div>
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
          {this.state.productDescription}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('product-service'))