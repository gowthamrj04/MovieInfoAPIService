import React, { Component, Fragment } from "react";
import MovieForm from "./MovieForm";
import MovieInfo from "./MovieInfo";
import MovieApiService from "../service/MovieApiService";

class FirstTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieInfo: [],
      showInfo: false,
      error: [],
    };
  }

  handleClick(movieTitle, movieYear) {
    MovieApiService.movieDetails(movieTitle, movieYear)
      .then((response) => {
        this.setState({ movieInfo: response.data, showInfo: true });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  }

  render() {
    return (
      <Fragment>
        <MovieForm
          handleClick={(movieTitle, movieYear) =>
            this.handleClick(movieTitle, movieYear)
          }
        />
        {this.state.showInfo && <MovieInfo movieInfo={this.state.movieInfo} />}
      </Fragment>
    );
  }
}

export default FirstTab;
