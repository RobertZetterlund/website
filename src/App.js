import React, { useState, useEffect } from "react";
import posed from "react-pose";
import "./styles.css";
import Fade from "react-reveal/Fade";
import info from "./info";
import "boxicons";

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

const Icon = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1
  },
  hover: {
    scale: 1.2
  }
});

const Boxes = () => {
  const [isFocused, setFocused] = useState(0);

  return (
    <body>
      <div class="grid-background">
        <div class="content-about">
          <div class="Text-about">
            <h1
              style={{
                fontFamily: "sans-serif",
                margin: "10px",
                fontSize: "42px"
              }}
            >
              {info[isFocused].title}{" "}
            </h1>
            <h2
              style={{
                fontFamily: "sans-serif",
                margin: "10px",
                fontSize: "28px"
              }}
            >
              {info[isFocused].subtitle}
            </h2>
            <p
              style={{
                fontFamily: "sans-serif",
                margin: "10px",
                fontSize: "20px"
              }}
            >
              {info[isFocused].paragraph}
            </p>
			<a href={info[isFocused].linkto}>
				<p style={{
                fontFamily: "sans-serif",
                margin: "10px",
                fontSize: "20px"
              }}>
			  	{info[isFocused].linktext}
				</p>
			</a>
          </div>
          <div class="social">
            <a href="https://github.com/RobertZetterlund">
              <Icon>
                <box-icon name="github" type="logo" size="md"></box-icon>
              </Icon>
            </a>
            <a href="https://www.linkedin.com/in/robert-zetterlund-a3bb6717a/">
              <Icon>
                <box-icon type="logo" name="linkedin" size="md"></box-icon>{" "}
              </Icon>
            </a>
            <a href="mailto:robert.zetterlund@outlook.com">
              <Icon>
                <box-icon name="mail-send" size="md"></box-icon>
              </Icon>
            </a>
          </div>
        </div>

        <div class="box-container">
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
    </body>
  );
};

export default Boxes;
