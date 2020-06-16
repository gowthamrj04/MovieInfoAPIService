import React, { Component, Fragment } from "react";
import MovieModal from "./MovieModal";

class MovieInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <div className="row movieShortInfo mt-4">
          <div className="col-md-12">
            <h4>Movie Info</h4>

            {this.props.movieInfo.Error && (
              <div className="bg-danger p-2">{this.props.movieInfo.Error}</div>
            )}
            {this.props.movieInfo.Title && (
              <div className="movieDetailsTable">
                <table className="table">
                  <tbody>
                    <tr>
                      <td className="tableHeadings">Title</td>
                      <td className="tableValue">
                        {this.props.movieInfo.Title}
                      </td>
                    </tr>
                    <tr>
                      <td className="tableHeadings">Genre</td>
                      <td className="tableValue">
                        {this.props.movieInfo.Genre}
                      </td>
                    </tr>
                    <tr>
                      <td className="tableHeadings">Language</td>
                      <td className="tableValue">
                        {this.props.movieInfo.Language}
                      </td>
                    </tr>
                    <tr>
                      <td className="tableHeadings">Actors</td>
                      <td className="tableValue">
                        {this.props.movieInfo.Actors}
                      </td>
                    </tr>
                    <tr>
                      <td className="tableHeadings">Director</td>
                      <td className="tableValue">
                        {this.props.movieInfo.Director}
                      </td>
                    </tr>
                  </tbody>
                </table>

                <button
                  type="button"
                  className="btn btn-success"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Read More..
                </button>
              </div>
            )}
          </div>
        </div>

        <MovieModal movieInfo={this.props.movieInfo} />
      </Fragment>
    );
  }
}
export default MovieInfo;
