import React, { useState } from "react";
import { style } from "./index.scss";
import Mobile from "../Mobile/index";
import FrontendText from "../FrontendText/index";
import Backend from "../Backend/index";
import FrontendWorks from "../FrontendWorks/index";
const Fields = ({}) => {
  let [sel, setSel] = useState(1);
  if (sel === 1) {
    return <FrontendWorks change={setSel} />;
  }
  return (
    <div className="fields">
      <div
        onClick={() => {
          setSel(1);
        }}
        className="frontend"
      >
        <FrontendText text={"Frontend"} />
      </div>
      <div className="backend">
        <Backend />
      </div>
      <div className="mobile">
        <Mobile />
      </div>
    </div>
  );
};

Fields.propTypes = {};

export default Fields;
