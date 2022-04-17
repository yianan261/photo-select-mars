import React , {useState }from "react";
import "../style/Filter.css";
import SelectRover from "../components/SelectRover";
import SelectCamera from "../components/SelectCamera";
// import SelectSol from "../components/SelectSol";
import PropTypes from "prop-types";


function Filter({ imgs }) {

  const [isCButtonActive, setCButtonActive] = useState(false);
  const [isOButtonActive, setOButtonActive] = useState(false);
  const [isSButtonActive, setSButtonActive] = useState(false);

  const [camera, setCamera] = useState({
    Curiosity :[],
    Opportunity :[],
    Spirit :[]
  });
  console.log("camera",camera)
  const handleSelectOption = (e) => {
    // Destructuring
    
    const { name, checked } = e.target;
    const { Curiosity, Opportunity, Spirit} = camera;
      
    console.log(`${name} is ${checked}`);
     
    // Case 1 : The user checks the box
    if (checked) {
      if (isCButtonActive){
        setCamera({
          Curiosity: [...Curiosity, name],
          Opportunity: [...Opportunity],
          Spirit: [...Spirit]
        });
      }
      else if(isOButtonActive){
        setCamera({
          Curiosity: [...Curiosity],
          Opportunity: [...Opportunity, name],
          Spirit: [...Spirit]
        });
      }
      else if(isSButtonActive){
        setCamera({
          Curiosity: [...Curiosity],
          Opportunity: [...Opportunity],
          Spirit: [...Spirit, name]
        });
      }
    }
    // Case 2  : The user unchecks the box
    else {
      setCamera({
        Curiosity: Curiosity.filter((e) => e !== name),

      });
    }
  }
  const handleCButton = () => {
    isCButtonActive ? setCButtonActive(false) : setCButtonActive(true);
  };

  const handleOButton = () => {
    isOButtonActive ? setOButtonActive(false) : setOButtonActive(true);
  };

  const handleSButton = () => {
    isSButtonActive ? setSButtonActive(false) : setSButtonActive(true);
  };



  return (
    <div className="Filter">
      <SelectRover isCButtonActive ={isCButtonActive} isOButtonActive ={isOButtonActive} isSButtonActive ={isSButtonActive}
      handleCButton ={handleCButton} handleOButton={handleOButton} handleSButton={handleSButton} />
      <SelectCamera imgs={imgs} isCButtonActive={isCButtonActive} isOButtonActive={isOButtonActive} isSButtonActive={isSButtonActive} handleSelectOption={handleSelectOption}/>
      {/* <SelectSol /> */}
    </div>
  );
}

Filter.propTypes = {
  imgs: PropTypes.array.isRequired,
};

export default Filter;
