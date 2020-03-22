import Category from './components/Category.jsx'
import Review from './components/Review.jsx'
import Price from './components/Price.jsx'
import Name from './components/Name.jsx'
import Selection from './components/Selection.jsx'
import Distribution from './components/Distribution.jsx'
import Highlight from './components/Highlight.jsx'
import Description from './components/Description.jsx'
import $ from 'jquery'

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
        <Name product={this.state}/>
        <Price/>
        <Selection product={this.state}/>
        <Distribution/>
        <Highlight product={this.state}/>
        <Description product={this.state}/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('product-service'))