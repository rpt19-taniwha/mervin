class Price extends React.Component {
  constructor() {
    super();
  }

  randomPrice() {
    var price = (Math.random() * 300).toFixed(2);
    return (<div className="price-amount">{`$${price}+`}</div>)
  }

  render() {
    return (
      <div className="price-component">
        {this.randomPrice()}
      </div>
    )
  }
}

export default Price;

