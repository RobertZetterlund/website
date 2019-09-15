import React, { Component, useState, useEffect } from "react";
import posed from "react-pose";
import "./styles.css";
import Fade from "react-reveal/Fade";
import info from "./info";
import "boxicons";
import {selectSquare} from "./redux/actions"
import { connect } from 'react-redux';


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

const BoxContent = ({props}) => {
  return (
    <Fade>
      <Box
        className="box"
        style={{ background: "#f8b88b" }}
        onPressStart={() => console.log(props)}
        pose={"visible"}
      />
    </Fade>
  );
};	


const mapDispatchToProps = dispatch => {
	return {
        onChangeState: (index) => {
            return dispatch(selectSquare(index));
		}
	}
}


export default connect(
    mapDispatchToProps,
)(BoxContent);
