import React, { Component, Fragment } from "react";

class MovieForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieTitle: "Avengers",
      movieYear: "2019",
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitData() {
    this.props.handleClick(this.state.movieTitle, this.state.movieYear);
  }
  render() {
    return (
      <Fragment>
        <div className="movie-form mt-5">
          <div className="form-group">
            <label htmlFor="movieTitle">Movie Title</label>
            <input
              type="text"
              className="form-control"
              id="movieTitle"
              name="movieTitle"
              aria-describedby="movie title"
              value={this.state.movieTitle}
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="movieYear">Movie Year</label>
            <input
              type="number"
              className="form-control"
              id="movieYear"
              name="movieYear"
              aria-describedby="movie year"
              min="1001"
              max="2020"
              value={this.state.movieYear}
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <button
            className="btn btn-primary"
            onClick={this.submitData.bind(this)}
          >
            Submit
          </button>
        </div>
      </Fragment>
    );
  }
}
export default MovieForm;
