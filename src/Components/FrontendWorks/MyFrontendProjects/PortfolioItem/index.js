import React from "react";
import "./index.scss";

const PortfolioItem = ({ feProject }) => {
  return (
    <div className="portf-item">
      <div className="container">
        <img src={feProject.photo} alt="Avatar" className="image" />
        <div className="overlay">
          <div className="title">{feProject.title}</div>
          <div className="techs-cont">
            <div className="tech-used">Technology used</div>
            <div className="techs">
              <div className="tech">React</div>
              <div className="tech">Redux</div>
              <div className="tech">React</div>
              <div className="tech">Redux</div>
            </div>
          </div>
          <div className="desc">{feProject.desc}</div>
        </div>
      </div>
    </div>
  );
};

PortfolioItem.propTypes = {};

export default PortfolioItem;
