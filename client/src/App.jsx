import Review from './components/review.jsx'

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Review/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('product-service'))