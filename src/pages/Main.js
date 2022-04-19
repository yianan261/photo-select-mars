import React, { useState, useEffect } from "react";
// import Home from "./Home";
import Filter from "./Filter";
import axios from "axios";
import Home from "./Home";
import Navbar from "../components/Navbar";

function Main() {
  const [imgsMap, setImgsMap] = useState(
  new Map([
    ["curiosity", []],
    ["opportunity", []],
    ["spirit", []],
  ])
  );

  let imgs = [];
  for (let value of imgsMap.values()) {
    imgs = imgs.concat(value); 
  }
  console.log(imgs);
  const [isCButtonActive, setCButtonActive] = useState(false);
  const [isOButtonActive, setOButtonActive] = useState(false);
  const [isSButtonActive, setSButtonActive] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const [submit, setSubmit] = useState(false);

  const [camera, setCamera] = useState([]);
  const [rover, setRover] = useState(
    new Map([
      ["curiosity", []],
      ["opportunity", []],
      ["spirit", []],
    ])
  );

  const [solDay, setSolDay] = useState(1000);
  console.log(solDay);
  /**
   * function that gets http request
   * @param {*} cam is the rover (string)
   */
  function getReq(cam) {
    if (rover.get("curiosity").length > 0) {
      return axios
        .get(
          `https://api.nasa.gov/mars-photos/api/v1/rovers/${cam}/photos?sol=${solDay}&api_key=c1FNqfNYAzqQKjJ6clG3rXbXzXFeCtGbVlZU0O1K`
        )
        .then((res) => {
          // setImgsMap(res.data.photos);

          console.log("imgsMap", imgsMap);
          // if (rover.get(cam).length > 0) {
          //   let tempMap = new Map(imgsMap);
          //   tempMap.set(cam,
          //     res.data.photos.filter((i) => {
          //       if (rover.get(cam).includes(i.camera.name)) {
          //         return true;
          //       }
          //       return false;
          //     })
          //   );

          //   setImgsMap(tempMap);
          // }
          return res.data.photos.filter((i) => {
                  if (rover.get(cam).includes(i.camera.name)) {
                    return true;
                  }
                  return false;
                })
        })
        .catch((err) => console.log(err));
    }
    return [];
  }

  useEffect(() => {
    const fetchData = async () => {
      const [imgsC, imgsO, imgsS] = await Promise.all([
        getReq("curiosity"),
        getReq("opportunity"),
        getReq("spirit"),
      ]);
      let tempMap = new Map();
      tempMap.set("curiosity", imgsC);
      tempMap.set("opportunity", imgsO);
      tempMap.set("spirit", imgsS);
      setImgsMap(tempMap);
    };
    // if (rover.get("opportunity").length > 0) {
    //   setImgsMap(
    //     imgsMap.filter((i) => {
    //       if (rover.get("opportunity").includes(i.camera.name)) {
    //         return true;
    //       }
    //       return false;
    //     })
    //   );
    // }
    // if (rover.get("spirit").length > 0) {
    //   setImgsMap(
    //     imgsMap.filter((i) => {
    //       if (rover.get("spirit").includes(i.camera.name)) {
    //         return true;
    //       }
    //       return false;
    //     })
    //   );
    // }
    // console.log("API", imgsMap);
    fetchData();
  }, [solDay, rover]);
  console.log(imgsMap);
  /**
   * handleSelectOption function handles the form of the selected cameras in "SelectCamera.js" component
   * @param {*} e is event
   */
  const handleSelectOption = (e) => {
    const { name, checked } = e.target;
    // console.log("event", e);
    // console.log("E.target", e.target);
    // console.log("name", name);
    // console.log("Checked?", checked);
    // const { curiosity, opportunity, spirit} = camera;

    console.log(`${name} is ${checked}`);

    // Case 1 : The user checks the box
    if (checked) {
      setCamera([...camera, name]);
      // if (isCButtonActive) {
      //   setCamera({ ...camera, curiosity: [...camera.curiosity, name] });
      // }
      // if (isOButtonActive) {
      //   setCamera({ ...camera, opportunity: [...camera.opportunity, name] });
      // }
      // if (isSButtonActive) {
      //   setCamera({ ...camera, spirit: [...camera.spirit, name] });
      // }
    }
    // Case 2  : The user unchecks the box
    else {
      setCamera(camera.filter((e) => e !== name));
      // setCamera({
      //   curiosity: camera.curiosity.filter((e) => e !== name),
      //   opportunity: camera.opportunity.filter((e) => e !== name),
      //   spirit: camera.spirit.filter((e) => e !== name),
      // });
    }
  };

  /**
   * function that handles Sol day input when entered
   * @param {*} e
   */
  // const handleSolDay = (e) => {
  //   if (e.target.value <= 0) {
  //     setSolDay(solDay);
  //   } else {
  //     setSolDay(e.target.value);
  //   }
  //   console.log("Sol day", solDay);
  // };

  /**
   * function that handles data when form is submitted
   * @param {*} e
   */
  const handleSubmitData = (e) => {
    e.preventDefault();

    if (e.target.sol.value <= 0) {
      setSolDay(solDay);
    } else {
      setSolDay(e.target.sol.value);
    }

    let tempRover = new Map();

    if (!isCButtonActive) {
      tempRover.set("curiosity", []);
    } else {
      tempRover.set(
        "curiosity",
        camera.filter((e) => {
          if (e !== "PANCAM" && e !== "MINITES") {
            return true;
          }
          return false;
        })
      );
    }

    if (!isOButtonActive) {
      tempRover.set("opportunity", []);
    } else {
      tempRover.set(
        "opportunity",
        camera.filter(
          (e) =>
            e !== "MAST" && e !== "CHEMCAM" && e !== "MAHLI" && e !== "MARDI"
        )
      );
    }
    if (!isSButtonActive) {
      tempRover.set("spirit", []);
    } else {
      tempRover.set(
        "spirit",
        camera.filter(
          (e) =>
            e !== "MAST" && e !== "CHEMCAM" && e !== "MAHLI" && e !== "MARDI"
        )
      );
    }
    setRover(tempRover);
    // if (tempRover.get("curiosity").length > 0) {
    //   setImgsMap(
    //     imgsMap.filter((i) => {
    //       if (tempRover.get("curiosity").includes(i.camera.name)) {
    //         return true;
    //       }
    //       return false;
    //     })
    //   );
    // }
    // if (tempRover.get("opportunity").length > 0) {
    //   setImgsMap(
    //     imgsMap.filter((i) => {
    //       if (tempRover.get("opportunity").includes(i.camera.name)) {
    //         return true;
    //       }
    //       return false;
    //     })
    //   );
    // }
    // if (tempRover.get("spirit").length > 0) {
    //   setImgsMap(
    //     imgsMap.filter((i) => {
    //       if (tempRover.get("spirit").includes(i.camera.name)) {
    //         return true;
    //       }
    //       return false;
    //     })
    //   );
    // }
    // } else if (camera.opportunity.length > 0) {
    //   setImgsMap(imgsMap.filter((i) => );
    // } else if (camera.spirit.length > 0) {
    //   setImgsMap(imgsMap.filter((i) => );
    // }
    setSubmit(true);
    console.log("Submitted values", camera);
  };

  const handleSubmit = () => {
    setSubmit(false);
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
      <Navbar handleSubmit={handleSubmit} />
      {submit ? (
        <Home imgs={imgs} />
      ) : (
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
          // handleSolDay={handleSolDay}
        />
      )}
      {/* <Home imgsMap ={imgsMap} /> */}
    </div>
  );
}

export default Main;
