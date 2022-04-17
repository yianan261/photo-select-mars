import React, { useState, useEffect } from "react";
// import Home from "./Home";
import Filter from "./Filter";
import axios from "axios";

function Main() {
  const [imgs, setImgs] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=10&api_key=c1FNqfNYAzqQKjJ6clG3rXbXzXFeCtGbVlZU0O1K`
      )
      .then((res) => {
        setImgs(res.data.photos);
        console.log(imgs);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="Main">
      <Filter imgs={imgs} />
      {/* <Home imgs ={imgs} /> */}
    </div>
  );
}

export default Main;
