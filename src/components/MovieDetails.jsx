import React, { Component, Fragment } from "react";
import FirstTab from "./FirstTab";
import SecondTab from "./SecondTab";
import "../style.css";

class MovieDetails extends Component {
  render() {
    return (
      <Fragment>
        <div className="row movie-details">
          <div className="col-md-12">
            <h4>Moview Details</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="first-tab"
                  data-toggle="tab"
                  href="#first"
                  role="tab"
                  aria-controls="first"
                  aria-selected="true"
                >
                  First Tab
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  id="second-tab"
                  data-toggle="tab"
                  href="#second"
                  role="tab"
                  aria-controls="second"
                  aria-selected="false"
                >
                  Second Tab
                </a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="first"
                role="tabpanel"
                aria-labelledby="first-tab"
              >
                <FirstTab />
              </div>

              <div
                className="tab-pane fade"
                id="second"
                role="tabpanel"
                aria-labelledby="second-tab"
              >
                <SecondTab />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default MovieDetails;
