import React from "react";
import "../style/Filter.css";
import SelectRover from "../components/SelectRover";
import SelectCamera from "../components/SelectCamera";
import SelectSol from "../components/SelectSol";
import PropTypes from "prop-types";

function Filter({ imgs }) {
  return (
    <div className="Filter">
      <SelectRover />
      <SelectCamera imgs={imgs} />
      <SelectSol />
    </div>
  );
}

Filter.propTypes = {
  imgs: PropTypes.array.isRequired,
};
export default Filter;
