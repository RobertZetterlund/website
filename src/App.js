import React, { useState, useEffect } from "react";
import posed from "react-pose";
import "./styles.css";

const Box = posed.div({
  hidden: { opacity: 0.5 },
  visible: { opacity: 1 },
  pressable: true,
  press: { scale: 1.4 },

  hoverable: true,
  init: {
    scale: 1,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)"
  },
  hover: {
    scale: 1.2,
    boxShadow: "0px 5px 10px rgba(0,0,0,0.2)"
  },
  focusable: true,
  focus: {
    color: "#000",
    outlineWidth: "12px",
    outlineOffset: "5px",
    outlineColor: "#AB36FF",
    scale: 2
  }
});

const Example = () => {
  const [isVisible, setVisible] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setVisible(!isVisible);
    }, 10000);
  });
  return (
    <div class="grid-container">
      <div class="grid-row">
        <Box className="box" pose={isVisible ? "visible" : "hidden"} />
        <Box className="box" pose={isVisible ? "visible" : "hidden"} />
      </div>
      <div class="grid-row ">
        <Box className="box" pose={isVisible ? "visible" : "hidden"} />
        <Box className="box" pose={isVisible ? "visible" : "hidden"} />
      </div>
    </div>
  );
};

export default Example;
