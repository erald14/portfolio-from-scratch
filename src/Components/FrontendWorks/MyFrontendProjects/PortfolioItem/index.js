import React from "react";
import "./index.scss";

const PortfolioItem = ({}) => {
  return (
    <div className="portf-item">
      <div className="container">
        <img src="/hq.jpg" alt="Avatar" className="image" />
        <div className="overlay">
          <div className="text">Hello World</div>
        </div>
      </div>
    </div>
  );
};

PortfolioItem.propTypes = {};

export default PortfolioItem;
