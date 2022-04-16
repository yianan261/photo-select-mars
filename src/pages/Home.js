import React from "react";
import RenderImg from "../components/RenderImg";
import "../style/Home.css";
// import { RiHeartLine, RiHeartFill } from "react-icons/ri";

const Home = () => {
  // const [heart, setHeart] = useState(false);

  // function renderHeart() {
  //   return (
  //     <a href="#" className="btn btn-lg" onClick={() => setHeart(!heart)}>
  //       {heart ? (
  //         <RiHeartFill className="heart" size={30} style={{ color: "red" }} />
  //       ) : (
  //         <RiHeartLine className="heart" size={30} style={{ color: "red" }} />
  //       )}
  //     </a>
  //   );
  // }

  return (
    <div className="Home">
      <div className="container">
        <div className="inHome">
        {/* heart={renderHeart} */}
          <RenderImg  /> 
        </div>
      </div>
    </div>
  );
};

export default Home;
