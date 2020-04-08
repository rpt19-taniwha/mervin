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
    this.stars()
  }

  stars () {
    var productNumber = window.location.pathname.split('/')[2]
    $.ajax({
      method: 'GET',
      url: `http://ec2-13-59-182-191.us-east-2.compute.amazonaws.com:1234/product/reviews/${productNumber}/average`,
      success: results => { this.setState({stars: results[0]['AVG(star_rating)']}) },
      error: err => { console.log(err) }
    })
  }

  render() {
    return (
      // Placeholder for Iris's Review Service
      <div className="review-container">
        ⭐⭐⭐⭐⭐ (1599)
      </div>
    )
  }
}

export default Review;