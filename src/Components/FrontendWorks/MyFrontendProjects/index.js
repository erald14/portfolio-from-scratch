import React from "react";
import "./index.scss";
import fe from "../../../library/frontend";
import PortfolioItem from "./PortfolioItem/index";
const MyFrontendProjects = ({}) => {
  return (
    <div className="my-fe-works-cont">
      <h3>My frontend works</h3>
      <div className="pf-item-cont">
        {fe().map((feProject, index) => {
          return (
            <div
              className="animate-speed-1s"
              data-aos={index % 2 == 0 ? "fade-right" : "fade-left"}
            >
              <PortfolioItem feProject={feProject} />
            </div>
          );
        })}
        {/* <div className="animate-speed-1s" data-aos="fade-right">
          <PortfolioItem />
        </div>
        <div className="animate-speed-1s" data-aos="fade-left">
          <PortfolioItem />
        </div>
      </div>
      <div className="pf-item-cont">
        <div className="animate-speed-1s" data-aos="fade-right">
          <PortfolioItem />
        </div> */}
        {/* <div className="animate-speed-1s" data-aos="fade-left">
          <PortfolioItem />
        </div> */}
      </div>
    </div>
  );
};

MyFrontendProjects.propTypes = {};

export default MyFrontendProjects;
