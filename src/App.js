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
  }
});

const Boxes = () => {
  const [isFocused, setFocused] = useState(true);

  return (
    <div class="grid-background">
		
		<div class="content-about" >
			<h1 style={{fontFamily: "sans-serif"}}>Hej! 💻 </h1>
			<h2 style={{fontFamily: "sans-serif"}}>Mitt namn är Robert!</h2>
			<p style={{fontFamily: "sans-serif"}}> Här är text som är ombyttbar</p>
			<p style={{fontFamily: "sans-serif"}}> Här är lite till ipsum lorem</p>
			<p style={{fontFamily: "sans-serif"}}> en blå länk?</p>


		</div>


      <div class="grid-container" >
        <div class="grid-row">
          <Box
            className="box"
            style={{ background: "#f8b88b" }}
            onPressStart={() => setFocused(0)}
            pose={isFocused == 0 ? "visible" : "hidden"}
          />
          <Box
            className="box"
            onPressStart={() => setFocused(1)}
            style={{ background: "#b2cefe" }}
            pose={isFocused == 1 ? "visible" : "hidden"}
          />
        </div>
        <div class="grid-row ">
          <Box
            className="box"
            onPressStart={() => setFocused(2)}
            style={{ background: "#faf884" }}
            pose={isFocused == 2 ? "visible" : "hidden"}
          />
          <Box
            className="box"
            onPressStart={() => setFocused(3)}
            style={{ background: "#baed91" }}
            pose={isFocused == 3 ? "visible" : "hidden"}
          />
        </div>
      </div>
    </div>
  );
};

export default Boxes;
