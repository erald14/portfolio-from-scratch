import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Erald from "./Erald.svg";
import Shadow from "./Components/Shadow/index";
import Fields from "./Components/Fields/index";
function App() {
  let [data, setData] = useState(<Shadow text={"Erald Calaj"} />);
  // let [data, setData] = useState(<Fields />);
  useEffect(() => {
    setTimeout(() => {
      setData(<Fields />);
    }, 4000);
  }, []);
  return <> {data}</>;
}

export default App;
