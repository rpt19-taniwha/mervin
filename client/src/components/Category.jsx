class Category extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="category-component">
        {this.props.product.productCategory}
      </div>
    )
  }
}

export default Category;