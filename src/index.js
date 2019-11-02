import React from "react";
import ReactDOM from "react-dom";
import WebApp from "./App";
import MobileApp from "./mobile/mobileApp";
import MediaQuery from "react-responsive";

const elem = (
  <div>
    <MediaQuery minWidth={1150}>
      <WebApp />
    </MediaQuery>
    <MediaQuery maxWidth={1150}>
      <MobileApp />	
    </MediaQuery>
  </div>
);

ReactDOM.render(elem, document.getElementById("root"));
