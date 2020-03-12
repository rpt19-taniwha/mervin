import Category from './components/Category.jsx'
import Review from './components/Review.jsx'
import Price from './components/Price.jsx'

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div>APP</div>
        <Category/>
        <Review/>
        <Price/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('product-service'))