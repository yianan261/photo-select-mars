import React from "react";
import "../style/Filter.css";

function SelectCamera() {
  return (
    <div className="SelectCamera">
      <div className="container">
        <h1 className="selectcam">Select Camera</h1>
        <div className="card">
          <div className="cardContent">
            <div className="row">
              <div className="col-12 col-md-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckDisabled"
                    disabled
                  />
                  <label className="form-check-label" htmlFor="cameraFhaz1">
                    Front Hazard Avoidance Camera
                  </label>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" disable />
                  <label className="form-check-label" htmlFor="cameraRhaz1">
                    Rear Hazard Avoidance Camera
                  </label>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label" htmlFor="cameraMast1">
                    Mast Camera
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-4">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label" htmlFor="cameraChemcam1">
                    Chemistry and Camera Complex
                  </label>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label" htmlFor="cameraMahli1">
                    Mars Hand Lens Imager
                  </label>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label" htmlFor="cameraMardi1">
                    Mars Descent Imager
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-4">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label" htmlFor="cameraNavcam1">
                    Navigation Camera
                  </label>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label" htmlFor="cameraPancam1">
                    Panoramic Camera
                  </label>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label" htmlFor="cameraMinites1">
                    Miniature Thermal Emission Spectrometer (Mini-TES)
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectCamera;
