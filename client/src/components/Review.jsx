import $ from 'jquery';

class Review extends React.Component {
  constructor() {
    super();
    this.state = {
      stars: 0,
      reviews: 0
    }
    this.stars = this.stars.bind(this);
  }

  componentDidMount () {
    this.stars();
  }

  stars () {
    var productNumber = window.location.pathname.split('/')[2]
    $.ajax({
      method: 'GET',
      url: `http://ec2-13-59-182-191.us-east-2.compute.amazonaws.com:1234/product/reviews/${productNumber}/average`,
      success: results => {
        var number = Number((Math.round(results[0]['AVG(star_rating)'] * 2) / 2).toFixed(1))
        this.setState({stars: number})
      },
      error: err => { console.log(err) }
    })
  }

  render() {
    var starCounter = () => {
      var stars = [];
      if (this.state.stars % 1 !== 0) {
        for (var i = 0; i <= this.state.stars + 0.5; i++) {
          if (i === this.state.stars + 0.5) {
            stars.push(<img key={i} className="star-icon" src="https://mervin-fec-service.s3-us-west-1.amazonaws.com/star-half.png"></img>);
          } else {
            stars.push(<img key={i} className="star-icon" src="https://mervin-fec-service.s3-us-west-1.amazonaws.com/star.png"></img>);
          }
        }
        return stars;
      } else {
        for (var i = 0; i < this.state.stars; i++) {
          stars.push(<img key={i} className="star-icon" src="https://mervin-fec-service.s3-us-west-1.amazonaws.com/star.png"></img>);
        }
        return stars;
      }
    }

    return (
      <div className="review-container">
        <div>
          {starCounter()}
        </div>
      </div>
    )
  }
}

export default Review;