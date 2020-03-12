import Category from './components/Category.jsx'
import Review from './components/review.jsx'

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
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('product-service'))