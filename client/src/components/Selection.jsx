class Selection extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="selection-component">
        <form>
          <label className="selection-label">Style</label>
          <select className="selection-dropdown">
            <option>Select a style</option>
            <option>Leatherbound Edition</option>
            <option>Hardcover Edition</option>
          </select>
        </form>
        <form>
          <label className="selection-label">Quantity</label>
          <select className="selection-dropdown">
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </form>

        <button className="selection-button">Add to cart</button>
      </div>
    )
  }
}

export default Selection;

