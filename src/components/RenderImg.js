import React, { useState, useEffect } from "react";
// import axios from "axios";
import "../style/Render.css";
import { RiHeartLine, RiHeartFill } from "react-icons/ri";
import PropTypes from "prop-types";

function RenderImg({ addFave, imgs }) {
  // const [imgs, setImgs] = useState([]);
  const [heart, setHeart] = useState(new Map());

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=10&api_key=c1FNqfNYAzqQKjJ6clG3rXbXzXFeCtGbVlZU0O1K`
  //     )
  //     .then((res) => {
  //       setImgs(res.data.photos);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  useEffect(() => {
    const initialIds = new Map();
    imgs.forEach((element) => {
      initialIds.set(element.id, false);
    });

    setHeart(initialIds);
  }, [imgs]);
  console.log(":31 heart", heart);

  /**
   * function that renders heart icon
   * @returns heart icon in conditional rendering
   */
  function renderHeart(_id) {
    return (
      <a
        className="btn btn-lg"
        onClick={() => {
          const Ids = new Map(heart);
          Ids.set(_id, !Ids.get(_id));
          setHeart(Ids);
          let getObj = imgs.find((i) => i.id === _id);
          console.log("getOBJ", getObj);
          addFave(getObj, heart);
        }}
      >
        {heart.get(_id) ? (
          <RiHeartFill className="heart" size={30} style={{ color: "red" }} />
        ) : (
          <RiHeartLine className="heart" size={30} style={{ color: "red" }} />
        )}
      </a>
    );
  }

  /**
   * function that displays the returned images in horizontal pairs
   * @param {*} size, shows the images in a row of size(in this case 2)
   * @param {*} array (the array returned from imgs, from the NASA API key)
   * @returns
   */
  function display(size, array) {
    let pairs = [];
    let i = 0;
    while (i < array.length) {
      pairs.push(array.slice(i, (i += size)));
    }
    return pairs;
  }
  let imagePairs = display(2, imgs);

  return (
    <div>
      <div className="imgRender">
        {imagePairs.map((rover, idx) => (
          <div className="card-group " id="cardGroup" key={idx}>
            {rover.map((roverpic) => (
              <div className="card container" id="cardimage" key={roverpic.id}>
                <div className="card-body">
                  <h5 className="card-title"> Rover: {roverpic.rover.name}</h5>
                  <img className="imgs" src={roverpic.img_src} alt="" />
                  <p className="card-text">
                    Sol: {roverpic.sol}
                    <br />
                    Earth Date: {roverpic.earth_date}
                    <br />
                    Landing Date:{roverpic.rover.landing_date}
                    <br />
                    Status: {roverpic.rover.status}
                  </p>
                  <div className="cardlink">{renderHeart(roverpic.id)}</div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

RenderImg.propTypes = {
  addFave: PropTypes.any.isRequired,
  imgs: PropTypes.array.isRequired,
};
export default RenderImg;
