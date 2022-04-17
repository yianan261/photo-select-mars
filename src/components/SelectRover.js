import React, { useState, useEffect } from "react";
import "../style/Filter.css";
import { roverCamMap } from "./RoverCam";

function SelectRover() {
  const [isCButtonActive, setCButtonActive] = useState(false);
  const [isOButtonActive, setOButtonActive] = useState(false);
  const [isSButtonActive, setSButtonActive] = useState(false);

  const handleCButton = () => {
    isCButtonActive ? setCButtonActive(false) : setCButtonActive(true);
  };

  const handleOButton = () => {
    isOButtonActive ? setOButtonActive(false) : setOButtonActive(true);
  };

  const handleSButton = () => {
    isSButtonActive ? setSButtonActive(false) : setSButtonActive(true);
  };

  useEffect(() => {});

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
                id={`${isCButtonActive ? "CButtonActive" : ""}`}
                onClick={handleCButton}
              >
                Curiosity
              </button>
            </div>
            <div className="col-sm">
              <button
                type="button"
                className="btn btn-primary btn-lg btn-block"
                aria-pressed="true"
                id={`${isOButtonActive ? "OButtonActive" : ""}`}
                onClick={handleOButton}
              >
                Opportunity
              </button>
            </div>
            <div className="col-sm">
              <button
                type="button"
                className="btn btn-primary btn-lg btn-block"
                aria-pressed="true"
                id={`${isSButtonActive ? "SButtonActive" : ""}`}
                onClick={handleSButton}
              >
                Spirit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectRover;
