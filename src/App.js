import React, { useState, useEffect } from "react";
import posed from "react-pose";
import "./styles.css";

const Box = posed.div({
  hidden: { opacity: 0.5 },
  visible: { opacity: 1 },
  pressable: true,
  press: { scale: 1.2 },

  hoverable: true,
  init: {
    scale: 1,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)"
  },
  hover: {
    scale: 1.1,
    boxShadow: "0px 5px 10px rgba(0,0,0,0.2)"
  },
});

const Example = () => {
  const [isVisible, setVisible] = useState(true);

  /*useEffect(() => {
    setInterval(() => {
      setVisible(!isVisible);
    }, 10000);
  });*/
  return (
    <div class="grid-container">
      <div class="grid-row">
        <Box className="box" style={{background: "#f8b88b"}} pose={isVisible ? "visible" : "hidden"} />
        <Box className="box" style={{background: "#b2cefe"}} pose={isVisible ? "visible" : "hidden"} />
      </div>
      <div class="grid-row ">
        <Box className="box" style={{background: "#faf884"}} pose={isVisible ? "visible" : "hidden"} />
        <Box className="box" style={{background: "#baed91"}} pose={isVisible ? "visible" : "hidden"} />
      </div>
    </div>
  );
};

export default Example;
