import React from "react";
import "./index.scss";

const Backend = ({}) => {
  return (
    <div>
      <div className="fakeMenu">
        <div className="fakeButtons fakeClose" />
        <div className="fakeButtons fakeMinimize" />
        <div className="fakeButtons fakeZoom" />
      </div>
      <div className="fakeScreen">
        <p className="line1">&gt;&nbsp;backend</p>
        <p className="line4">
          &gt;<span className="cursor4">_</span>
        </p>
      </div>
    </div>
  );
};

Backend.propTypes = {};

export default Backend;
