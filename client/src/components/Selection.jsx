class Selection extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="selection-component">
        <form>
          <label className="selection-label col-sm-12 col-md-12 col-lg-12">Style</label>
          <select className="selection-dropdown col-sm-12 col-md-12 col-lg-12">
            <option>Select a style</option>
            <option>Leatherbound Edition</option>
            <option>Hardcover Edition</option>
          </select>
        </form>
        <form>
          <label className="selection-label col-sm-12 col-md-12 col-lg-12">Quantity</label>
          <select className="selection-dropdown col-sm-12 col-md-12 col-lg-12">
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </form>

        <button className="selection-button col-sm-12 col-md-12 col-lg-12">Add to cart</button>
      </div>
    )
  }
}

export default Selection;

