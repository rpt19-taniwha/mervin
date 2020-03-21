import React from 'react';

class Name extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="name-component">
        {this.props.product.productName}
      </div>
    )
  }
}

export default Name;

