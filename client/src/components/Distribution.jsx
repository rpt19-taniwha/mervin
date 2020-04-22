import React from 'react';

function Distribution() {
    return (
      <div className="distribution-component">
        <div className="delivery-wrapper">
        <img className="icon-truck" src="https://mervin-fec-service.s3-us-west-1.amazonaws.com/truck.png"></img>
          <div className="distribution-text"><strong>Hooray!</strong> This item ships free to the US.</div>
        </div>
        <div className="remaining-wrapper">
          <img className="icon-hourglass" src="https://mervin-fec-service.s3-us-west-1.amazonaws.com/hourglass.png"></img>
          <div className="distribution-text"><strong>Almost gone.</strong> There's only 3 left.</div>
        </div>
      </div>
    )
}

export default Distribution;

