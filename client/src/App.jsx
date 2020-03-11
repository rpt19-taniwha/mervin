import Test from './components/test.jsx'
import Category from './components/Category.jsx'

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div>APP</div>
        <Category/>
        <Test/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('product-service'))