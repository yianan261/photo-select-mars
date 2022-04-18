import React, { useState, useEffect } from "react";
// import Home from "./Home";
import Filter from "./Filter";
import axios from "axios";

function Main() {
  const [imgs, setImgs] = useState([]);
  const [isCButtonActive, setCButtonActive] = useState(false);
  const [isOButtonActive, setOButtonActive] = useState(false);
  const [isSButtonActive, setSButtonActive] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [submit, setSubmit] = useState(false);

  const [camera, setCamera] = useState({
    Curiosity: [],
    Opportunity: [],
    Spirit: [],
  });

  const [solDay, setSolDay] = useState(1000);

  /**
   * function that gets http request
   * @param {*} cam is the rover (string)
   */
  function getReq(cam) {
    axios
      .get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${cam}/photos?sol=${solDay}&api_key=c1FNqfNYAzqQKjJ6clG3rXbXzXFeCtGbVlZU0O1K`
      )
      .then((res) => {
        setImgs(res.data.photos);
        console.log(imgs);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    if (camera.Curiosity.length > 0) getReq("curiosity");
    else if (camera.Opportunity.length > 0) getReq("opportunity");
    else if (camera.Spirit.length > 0) getReq("spirit");
  }, []);

  /**
   * handleSelectOption function handles the form of the selected cameras in "SelectCamera.js" component
   * @param {*} e is event
   */
  const handleSelectOption = (e) => {
    const { name, checked } = e.target;
    // const { Curiosity, Opportunity, Spirit} = camera;

    console.log(`${name} is ${checked}`);

    // Case 1 : The user checks the box
    if (checked) {
      if (isCButtonActive) {
        setCamera({ ...camera, Curiosity: [...camera.Curiosity, name] });
      }
      if (isOButtonActive) {
        setCamera({ ...camera, Opportunity: [...camera.Opportunity, name] });
      }
      if (isSButtonActive) {
        setCamera({ ...camera, Spirit: [...camera.Spirit, name] });
      }
    }

    // Case 2  : The user unchecks the box
    else {
      setCamera({
        Curiosity: camera.Curiosity.filter((e) => e !== name),
        Opportunity: camera.Opportunity.filter((e) => e !== name),
        Spirit: camera.Spirit.filter((e) => e !== name),
      });
    }
    console.log("CAMERA", camera);
  };

  /**
   * function that handles Sol day input when entered
   * @param {*} e
   */
  const handleSolDay = (e) => {
    if (e.target.value <= 0) {
      setSolDay(solDay);
    } else {
      setSolDay(e.target.value);
    }
    console.log("Sol day", solDay);
  };

  /**
   * function that handles data when form is submitted
   * @param {*} e
   */
  const handleSubmitData = (e) => {
    e.preventDefault();
    if (camera.Curiosity.length > 0) {
      setImgs(imgs.filter((i) => i.camera.name.includes(camera.Curiosity)));
      // } else if (camera.Opportunity.length > 0) {
      //   setImgs(imgs.filter((i) => );
      // } else if (camera.Spirit.length > 0) {
      //   setImgs(imgs.filter((i) => );
      // }
      setSubmit(true);
      console.log("Submitted values", camera);
    }
  };

  /** handle button functions toggle button activation when Rovers are selected or deselected */
  const handleCButton = () => {
    isCButtonActive ? setCButtonActive(false) : setCButtonActive(true);
  };

  const handleOButton = () => {
    isOButtonActive ? setOButtonActive(false) : setOButtonActive(true);
  };

  const handleSButton = () => {
    isSButtonActive ? setSButtonActive(false) : setSButtonActive(true);
  };

  //functions passed as props to children components
  return (
    <div className="Main">
      <Filter
        imgs={imgs}
        isCButtonActive={isCButtonActive}
        isOButtonActive={isOButtonActive}
        isSButtonActive={isSButtonActive}
        handleCButton={handleCButton}
        handleOButton={handleOButton}
        handleSButton={handleSButton}
        handleSelectOption={handleSelectOption}
        handleSubmitData={handleSubmitData}
        handleSolDay={handleSolDay}
      />
      {/* <Home imgs ={imgs} /> */}
    </div>
  );
}

export default Main;
