import React from "react";
import "./index.scss";

const Shadow = ({ text }) => {
  let A = (
    <>
      {text.split(" ").map(word => {
        return (
          <>
            &nbsp;
            {word.split("").map(char => {
              return <span>{char}</span>;
            })}
          </>
        );
      })}
    </>
  );
  return <div className="shadow">{A}</div>;
};

Shadow.propTypes = {};

export default Shadow;
