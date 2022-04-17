import React from "react";
import "../style/Filter.css";

function SelectSol() {
  return (
    <div className="SelectSol">
      <div className="container">
        <div className="Filterbody">
          <form>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput" id="Sol">
                <h1>Sol</h1>
              </label>

              <input type="number" className="form-control" min="0" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SelectSol;
