import React, { Component, Fragment } from "react";
class MovieFullDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <table className="table">
          <tbody>
            <tr>
              <td className="tableHeadings">Title</td>
              <td className="tableValue">{this.props.movieInfo.Title}</td>
            </tr>
            <tr>
              <td className="tableHeadings">Genre</td>
              <td className="tableValue">{this.props.movieInfo.Genre}</td>
            </tr>
            <tr>
              <td className="tableHeadings">ImdbRating</td>
              <td className="tableValue">{this.props.movieInfo.imdbRating}</td>
            </tr>
            <tr>
              <td className="tableHeadings">BoxOffice</td>
              <td className="tableValue">
                {this.props.movieInfo.imdbRating > 7 ? "Hit" : "Flop"}
              </td>
            </tr>
            <tr>
              <td className="tableHeadings">Language</td>
              <td className="tableValue">{this.props.movieInfo.Language}</td>
            </tr>
            <tr>
              <td className="tableHeadings">Actors</td>
              <td className="tableValue">{this.props.movieInfo.Actors}</td>
            </tr>
            <tr>
              <td className="tableHeadings">Director</td>
              <td className="tableValue">{this.props.movieInfo.Director}</td>
            </tr>
            <tr>
              <td className="tableHeadings">Country</td>
              <td className="tableValue">{this.props.movieInfo.Country}</td>
            </tr>
            <tr>
              <td className="tableHeadings">Plot</td>
              <td className="tableValue">{this.props.movieInfo.Plot}</td>
            </tr>
            <tr>
              <td className="tableHeadings">Rated</td>
              <td className="tableValue">{this.props.movieInfo.Rated}</td>
            </tr>
            <tr>
              <td className="tableHeadings">Released</td>
              <td className="tableValue">{this.props.movieInfo.Released}</td>
            </tr>
            <tr>
              <td className="tableHeadings">Runtime</td>
              <td className="tableValue">{this.props.movieInfo.Runtime}</td>
            </tr>
            <tr>
              <td className="tableHeadings">Year</td>
              <td className="tableValue">{this.props.movieInfo.Year}</td>
            </tr>

            <tr>
              <td className="tableHeadings">imdbVotes</td>
              <td className="tableValue">{this.props.movieInfo.imdbVotes}</td>
            </tr>
            <tr>
              <td className="tableHeadings">Awards</td>
              <td className="tableValue">{this.props.movieInfo.Awards}</td>
            </tr>

            <tr>
              <td className="tableHeadings">DVD</td>
              <td className="tableValue">{this.props.movieInfo.DVD}</td>
            </tr>
            <tr>
              <td className="tableHeadings">Metascore</td>
              <td className="tableValue">{this.props.movieInfo.Metascore}</td>
            </tr>
            <tr>
              <td className="tableHeadings">Production</td>
              <td className="tableValue">{this.props.movieInfo.Production}</td>
            </tr>
          </tbody>
        </table>
      </Fragment>
    );
  }
}
export default MovieFullDetails;
