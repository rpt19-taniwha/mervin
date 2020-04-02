class Selection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="selection-component">
        {Object.keys(this.props.product.versions).map((version, index) => {
          return (
            <form key={index}>
              <label className="selection-label">{version.charAt(0).toUpperCase() + version.substring(1)}</label>
              <select className="selection-dropdown">
                <option>Select a {version}</option>
                {this.props.product.versions[version].map((each, index) => {
                  return (<option key={index}>{each.name}</option>)
                })}
              </select>
            </form>
          )
        })}
        <form>
          <label className="selection-label">Quantity</label>
          <select className="selection-dropdown">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </form>

        <button className="selection-button">Add to cart</button>
      </div>
    )
  }
}

export default Selection;

