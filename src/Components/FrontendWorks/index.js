import React from "react";
import "./index.scss";
import Frontend from "../FrontendText/index";
import MyFrontendProjects from "./MyFrontendProjects/index";
const FrontendWorks = ({ change }) => {
  return (
    <div className="fe-works">
      <div
        className="name-fe"
        onClick={() => {
          change(0);
        }}
      >
        <Frontend text={"Erald Calaj"} />
      </div>
      <h3>My frontend skills</h3>
      <div className="fe-skills">
        <div className="skill-item">
          <img src="/logo512.png" />
          <div>React js</div>
        </div>
        <div className="skill-item">
          <img src="/redux.png" />
          <div>Redux</div>
        </div>
        <div className="skill-item">
          <img src="/type.png" />
          <div>Typescript</div>
        </div>
        <div className="skill-item">
          <img src="/formio-logo.png" />
          <div>Formio</div>
        </div>
        <div className="skill-item">
          <img src="/sass.svg" />
          <div>Sass</div>
        </div>
        <div className="skill-item">
          <img src="/javascript.svg" />
          <div>Javascript</div>
        </div>
        <div className="skill-item">
          <img src="/netlify.png" />
          <div>Netlify</div>
        </div>
        <div className="skill-item">
          <img src="/grunt.svg" />
          <div>Grunt</div>
        </div>
        <div className="skill-item">
          <img src="/jest.png" />
          <div>Jest</div>
        </div>
        <div className="skill-item">
          <img src="/webpack.png" />
          <div>Webpack</div>
        </div>
        <div className="skill-item">
          <img src="/babel.png" />
          <div>Babel</div>
        </div>
        <div className="skill-item">
          <img src="/sb.svg" />
          <div>Storybook</div>
        </div>
      </div>
      <MyFrontendProjects />
    </div>
  );
};

FrontendWorks.propTypes = {};

export default FrontendWorks;
