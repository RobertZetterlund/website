import React from "react";
import posed from "react-pose";
import "./styles.css";
import Fade from "react-reveal/Fade";
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

const BoxContent = ({ onClick, color, icon, pose }) => {
  return (
    <Fade>
      <Box
        className="box"
        style={{ background: color }}
        onPressStart={() => onClick()}
        pose={pose}
      >
        <box-icon name={icon} color="#ffffff" size="100px"></box-icon>
      </Box>
    </Fade>
  );
};

export default BoxContent;
