import React, { Component } from "react";
import MovieFullDetails from "./MovieFullDetails";
class MovieModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log("Modal ", this.props.movieInfo);

    return (
      <div className="readMore">
        <div className="modal" id="exampleModal" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{this.props.movieInfo.Title}</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="movieDetailed">
                  <MovieFullDetails movieInfo={this.props.movieInfo} />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieModal;
