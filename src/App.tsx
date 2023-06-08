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
            transform="scale(0.025) matrix(1,0,0,1,-18,-28)"
            d="M41.458,49.507L40.275,50.69L41.458,49.507ZM60.965,30L59.783,31.182L60.965,30ZM41.458,49.507L59.783,31.182L41.458,49.507ZM60.965,30L60.965,50.69L40.275,50.69L60.965,30ZM30.64,39.163C32.414,39.163 33.596,37.98 33.596,36.207C33.596,34.434 32.414,33.251 30.64,33.251L23.842,33.251L23.842,39.163L30.64,39.163ZM23.842,50.69L20,50.69L20,30L30.64,30C34.778,30 37.438,32.513 37.438,36.207C37.438,39.902 34.778,42.414 30.64,42.414L29.754,42.414L38.029,50.69L32.857,50.69L24.729,42.414L23.842,42.414L23.842,50.69Z"
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
