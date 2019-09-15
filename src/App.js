import React, { useState } from "react";
import "./styles.css";
import "boxicons";
import About from "./about";
import BoxContent from "./BoxContent";
import ContactIcon from "./contactIcon";

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
            <ContactIcon
              href={"https://github.com/RobertZetterlund"}
              name="github"
              type="logo"
            />
            <ContactIcon
              href={"https://www.linkedin.com/in/robert-zetterlund-a3bb6717a/"}
              name="linkedin"
              type="logo"
            />
            <ContactIcon
              href={"mailto:robert.zetterlund@outlook.com"}
              name="mail-send"
            />
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
