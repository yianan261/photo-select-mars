/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import RenderImg from "../components/RenderImg";
import "../style/Home.css";
import PropTypes from "prop-types";

const Home = ({ imgs }) => {
  const [faveList, setFaveList] = useState([]);

  /**
   * Function that adds and removes favorited rover images
   * @param {*} obj takes object that is clicked
   * @param {*} heartMap takes the hash map of "heart"
   */
  const addFave = (obj, heartMap) => {
    if (heartMap.get(obj.id)) {
      setFaveList([...faveList].concat(obj));
    } else {
      setFaveList(faveList.filter((i) => i.id !== obj.id));
    }
    console.log("FaveList in Home", faveList);
  };

  return (
    <div className="Home">
      <div className="container">
        <div className="inHome">
          <RenderImg addFave={addFave} imgs={imgs} />
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  imgs: PropTypes.array.isRequired,
};
export default Home;
