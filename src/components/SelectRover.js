import React from "react";
import "../style/Filter.css";

function SelectRover() {
  return (
    <div className="SelectRover">
      <div className="container">
        <div className="FilterBody">
          <h1 className="title"> Select Rover </h1>
          <div className="row ">
            <div className="col-sm">
              {" "}
              <button
                type="button"
                className="btn btn-primary btn-lg btn-block"
                aria-pressed="true"
              >
                Curiosity
              </button>
            </div>
            <div className="col-sm">
              <button
                type="button"
                className="btn btn-primary btn-lg btn-block"
                aria-pressed="true"
              >
                Opportunity
              </button>
            </div>
            <div className="col-sm">
              <button
                type="button"
                className="btn btn-primary btn-lg btn-block"
                aria-pressed="true"
              >
                Spirit
              </button>
            </div>
          </div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias officia
          ullam optio nesciunt eveniet voluptate quia? Omnis ad, ducimus totam
          esse neque ipsum molestiae commodi. Iste cumque quisquam dolorum
          tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Alias officia ullam optio nesciunt eveniet voluptate quia? Omnis ad,
          ducimus totam esse neque ipsum molestiae commodi. Iste cumque quisquam
          dolorum tempora. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Alias officia ullam optio nesciunt eveniet voluptate quia? Omnis
          ad, ducimus totam esse neque ipsum molestiae commodi. Iste cumque
          quisquam dolorum tempora. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Alias officia ullam optio nesciunt eveniet voluptate
          quia? Omnis ad, ducimus totam esse neque ipsum molestiae commodi. Iste
          cumque quisquam dolorum tempora.
        </div>
      </div>
    </div>
  );
}

export default SelectRover;
