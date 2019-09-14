import React, { useState, useEffect } from "react";
import posed from "react-pose";
import "./styles.css";
import Fade from "react-reveal/Fade";
import info from "./info";

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
  }
});

const Boxes = () => {
  const [isFocused, setFocused] = useState(0);

  return (
    <div class="grid-background">
      <div class="content-about">
        <h1 style={{ fontFamily: "sans-serif" }}> {info[isFocused].title} </h1>
        <h2 style={{ fontFamily: "sans-serif" }}>{info[isFocused].subtitle}</h2>
        <p style={{ fontFamily: "sans-serif" }}>{info[isFocused].paragraph}</p>
        <p style={{ fontFamily: "sans-serif" }}> en blå länk?</p>
      </div>

      <div class="grid-container">
        <div class="grid-row">
          <Fade>
            <Box
              className="box"
              style={{ background: "#f8b88b" }}
              onPressStart={() => setFocused(0)}
              pose={isFocused === 0 ? "visible" : "hidden"}
            />
          </Fade>
          <Fade>
            <Box
              className="box"
              onPressStart={() => setFocused(1)}
              style={{ background: "#b2cefe" }}
              pose={isFocused === 1 ? "visible" : "hidden"}
            />
          </Fade>
        </div>
        <div class="grid-row ">
          <Fade>
            <Box
              className="box"
              onPressStart={() => setFocused(2)}
              style={{ background: "#faf884" }}
              pose={isFocused === 2 ? "visible" : "hidden"}
            />
          </Fade>
          <Fade>
            <Box
              className="box"
              onPressStart={() => setFocused(3)}
              style={{ background: "#baed91" }}
              pose={isFocused === 3 ? "visible" : "hidden"}
            />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Boxes;
