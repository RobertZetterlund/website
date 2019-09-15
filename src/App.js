import React, { useState } from "react";
import posed from "react-pose";
import "./styles.css";
import "boxicons";
import About from "./about";
import BoxContent from "./BoxContent";

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

const HomePage = () => {
  const [isFocused, setFocused] = useState(0);

  return (
    <body>
      <div class="grid-background">
        <div class="content-about">
          <div class="Text-about">
            <About index={isFocused} />
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
          <BoxContent
            color="#1A3768"
            onClick={() => setFocused(0)}
            pose={isFocused === 0 ? "visible" : "hidden"}
            icon="bot"
          />
          <BoxContent
            color="#902B66"
            onClick={() => setFocused(1)}
            pose={isFocused === 1 ? "visible" : "hidden"}
            icon="mobile-alt"
          />
          <BoxContent
            color="#B57236"
            onClick={() => setFocused(2)}
            pose={isFocused === 2 ? "visible" : "hidden"}
            icon="calendar-event"
          />
          <BoxContent
            color="#5C9F30"
            onClick={() => setFocused(3)}
            pose={isFocused === 3 ? "visible" : "hidden"}
            icon="world"
          />
        </div>
      </div>
    </body>
  );
};

export default HomePage;
