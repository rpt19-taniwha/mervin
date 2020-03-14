class Distribution extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="distribution-component">
        <div className="delivery-wrapper">
          <div className="icon">🚚</div>
          <div className="distribution-text"><strong>Hooray!</strong> This item ships free to the US.</div>
        </div>
        <div className="remaining-wrapper">
          <div className="icon">⌛</div>
          <div className="distribution-text"><strong>Almost gone.</strong> There's only 3 left.</div>
        </div>
      </div>
    )
  }
}

export default Distribution;

