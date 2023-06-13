import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <video className="isClipped" src="traffic2.mp4" autoPlay muted loop />
      <video className="isClipped" src="office.mp4" autoPlay muted loop />
      <div className="hide">
        <svg>
          <clipPath id="svgClip" clipPathUnits="objectBoundingBox">
            <path
              transform="scale(0.025) matrix(1,0,0,1,-18,-28)"
              d="M41.458,49.507L40.275,50.69L41.458,49.507ZM60.965,30L59.783,31.182L60.965,30ZM41.458,49.507L59.783,31.182L41.458,49.507ZM60.965,30L60.965,50.69L40.275,50.69L60.965,30ZM30.64,39.163C32.414,39.163 33.596,37.98 33.596,36.207C33.596,34.434 32.414,33.251 30.64,33.251L23.842,33.251L23.842,39.163L30.64,39.163ZM23.842,50.69L20,50.69L20,30L30.64,30C34.778,30 37.438,32.513 37.438,36.207C37.438,39.902 34.778,42.414 30.64,42.414L29.754,42.414L38.029,50.69L32.857,50.69L24.729,42.414L23.842,42.414L23.842,50.69Z"
            />
          </clipPath>
        </svg>
      </div>
      {/* <svg width="0" height="0">
        <clipPath id="svgClip" clipPathUnits="objectBoundingBox">
          <path d="M0.988382 0H0.606045L0 0.606365H0.382337L0.988382 0ZM1 0.606855V0.046371L0.448589 0.606855H1Z" />
        </clipPath>
      </svg> */}

      <svg viewBox="0 0 643 525">
        <defs>
          <clipPath id="shape">
            <path
              fill="none"
              d="M109,120c0,0,163,46,220,9s34-97,34-97s39.138-16.341,70-11c26.406,4.57,66.618,73.939,105,138 c37.199,62.089,73,119,73,119s10.398,18.504,0,44c-8.608,21.105-22.685,41.421-88.85,85.03C468.32,442.51,411,474,411,474 s-85,45-192,9l-5,1c0,0-34.254,15.226-60.675,10.088c-36-7-48.249-32.676-48.249-32.676S172,402,160,327S60,220,60,220	s-8.444-34,0-52C77.666,130.345,109,120,109,120z"
            />
          </clipPath>
        </defs>
        <image
          width="643"
          height="643"
          clip-path="url(#shape)"
          href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/222579/beagle400.jpg"
        />
      </svg>
    </div>
  );
};

export default App;
