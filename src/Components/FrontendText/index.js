import React from "react";
import "./index.scss";

const FrontendText = ({ text }) => {
  return (
    <>
      <svg viewBox="0 0 960 300">
        <symbol id="s-text">
          <text textAnchor="middle" x="50%" y="80%">
            {text}
          </text>
        </symbol>
        <g className="g-ants">
          <use xlinkHref="#s-text" className="text-copy" />
          <use xlinkHref="#s-text" className="text-copy" />
          <use xlinkHref="#s-text" className="text-copy" />
          <use xlinkHref="#s-text" className="text-copy" />
          <use xlinkHref="#s-text" className="text-copy" />
        </g>
      </svg>
    </>
  );
};

FrontendText.propTypes = {};

export default FrontendText;
