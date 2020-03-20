class Description extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="description-component">
        {this.props.product.productDescription}
      </div>
    )
  }
}

export default Description;

