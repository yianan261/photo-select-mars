import React from "react";
import "../style/Filter.css";

function SelectSol() {
  return (

    <div className="form-group">
      <label htmlFor="formGroupExampleInput" id="Sol">
        <h1>Sol</h1>
      </label>

      <input type="number" className="form-control" min="0" />
    </div>

  );
}

export default SelectSol;
