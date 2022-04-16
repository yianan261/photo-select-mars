import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style/Render.css";
import { RiHeartLine, RiHeartFill } from "react-icons/ri";

function RenderImg() {
  const [imgs, setImgs] = useState([]);
  const [heart, setHeart] = useState(new Map());

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=10&api_key=c1FNqfNYAzqQKjJ6clG3rXbXzXFeCtGbVlZU0O1K`
      )
      .then((res) => {
        console.log(res);
        setImgs(res.data.photos);
        const Id = new Map();

        res.data.photos.forEach((element) => {
          Id.set(element.id, false);
        });
        setHeart(Id);
      })
      .catch((err) => console.log(err));
  }, []);

  /**
   * function that renders heart icon
   * @returns heart icon conditional rendering
   */
  function renderHeart(id) {
    return (
      <a
        href="#"
        className="btn btn-lg"
        onClick={() =>
          setHeart((prev) => {
            console.log("PREV", prev);
            prev.set(id, !prev.get(id));
          })
        }
      >
        {heart.get(id) ? (
          <RiHeartFill className="heart" size={30} style={{ color: "red" }} />
        ) : (
          <RiHeartLine className="heart" size={30} style={{ color: "red" }} />
        )}
      </a>
    );
  }

  /**
   * function that displays the returned images in horizontal pairs
   * @param {*} size we want to show in a row (in this case 2)
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
  console.log(imgs);
  let imagePairs = display(2, imgs);

  return (
    <div>
      <div className="imgRender">
        {imagePairs.map((rover, idx) => (
          <div className="card-group " id="cardGroup" key={idx}>
            {rover.map((roverpic) => (
              <div className="card" id="cardimage" key={roverpic.id}>
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
                  <div className="cardlink">
                    {renderHeart(roverpic.id)}
                    {/* <a
                      href="#"
                      className="btn btn-lg"
                      onClick={() => setHeart(!heart)}
                    >
                      <RiHeartLine
                        className="heart"
                        size={30}
                        style={{ color: "red" }}
                      />
                    </a> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RenderImg;