import React, { Component, Fragment } from "react";
import MovieForm from "./MovieForm";
import MovieApiService from "../service/MovieApiService";
import MovieFullDetails from "./MovieFullDetails";

class SecondTab extends Component {
  constructor(props) {
    super(props);
    this.state = { movieInfo: [], showInfo: false };
  }

  handleClick(movieTitle, movieYear) {
    MovieApiService.movieDetails(movieTitle, movieYear)
      .then((response) => {
        console.log(response.data);
        this.setState({ movieInfo: response.data, showInfo: true });
      })
      .catch((error) => {
        console.log(error);
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
        {this.state.movieInfo.Error && (
          <div className="bg-danger mt-2 p-2">{this.state.movieInfo.Error}</div>
        )}
        {this.state.movieInfo.Title && (
          <div className="details">
            {this.state.showInfo && (
              <div className="movieFullDetails mt-4">
                <h4> Movie Full Details</h4>
                {this.state.movieInfo.Poster !== "N/A" && (
                  <div className="poster mb-4">
                    <img alt="Poster" src={this.state.movieInfo.Poster} />
                  </div>
                )}
                <MovieFullDetails movieInfo={this.state.movieInfo} />
              </div>
            )}
          </div>
        )}
      </Fragment>
    );
  }
}

export default SecondTab;
