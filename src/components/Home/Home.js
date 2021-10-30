import React from "react";
import background from "../../image/banner.jpg";
import Plans from "../Plans/Plans";
import "./Home.css";

const Home = () => {
  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgoundSize: "cover",
  };
  return (
    <div className="app">
      <div style={backgroundStyle}>
        <div className="introduction">
          <h1>A MYSTICAL ADVENTURE</h1>
          <h6>
            A modern agency for all travel and tour loving beautiful people.
            Fear not! We are here to guide you to the world of unknown.
          </h6>
        </div>
      </div>
      <Plans></Plans>
    </div>
  );
};

export default Home;
