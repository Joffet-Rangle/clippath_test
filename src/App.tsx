import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <video className="isClipped" src="traffic2.mp4" autoPlay muted loop />
      <video className="isClipped" src="office.mp4" autoPlay muted loop />
      <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
        <clipPath id="svgClip" clipPathUnits="objectBoundingBox">
          <path
            transform="rotate(20)"
            d="M0.988382 0H0.606045L0 0.606365H0.382337L0.988382 0ZM1 0.606855V0.046371L0.448589 0.606855H1Z"
            fill="#262626"
          />
        </clipPath>
      </svg>
      {/* <svg width="0" height="0">
        <clipPath id="svgClip" clipPathUnits="objectBoundingBox">
          <path d="M0.988382 0H0.606045L0 0.606365H0.382337L0.988382 0ZM1 0.606855V0.046371L0.448589 0.606855H1Z" />
        </clipPath>
      </svg> */}
    </div>
  );
};

export default App;
