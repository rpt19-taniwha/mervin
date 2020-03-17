import Category from './components/Category.jsx'
import Review from './components/Review.jsx'
import Price from './components/Price.jsx'
import Name from './components/Name.jsx'
import Selection from './components/Selection.jsx'
import Distribution from './components/Distribution.jsx'
import Highlight from './components/Highlight.jsx'
import Description from './components/Description.jsx'


class App extends React.Component {
  constructor() {
    super();
    this.state = {};

  }

  componentDidMount() {
    console.log(document.location.pathname);
    // $.ajax({
    //   method: 'GET',
    //   url: 'localhost/products/123',
    //   success: function() {
    //     console.log('works')
    //   }
    // })
  }

  render() {
    return (
      <div className="product-service-container col-sm-4 col-md-4 col-lg-4">
        <div className="category-review-wrapper">
          <Category/>
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