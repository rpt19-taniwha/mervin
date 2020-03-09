import Test from './components/test.jsx'

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div>APP</div>
        <Test/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('product-service'))