import React from "react";
import "./styles.css";
import Fade from "react-reveal/Fade";
import info from "./info";
import "boxicons";

const text = ({index}) => {
  return textAbout(index);
};

const textAbout = (index) =>{
	return(
		<div>
          <Fade bottom>
            <h1
              style={{
                fontFamily: "sans-serif",
                margin: "15px",
                fontSize: "42px"
              }}
            >
              {info[index].title}
            </h1>
          </Fade>
          <Fade bottom>
            <h2
              style={{
                fontFamily: "sans-serif",
                margin: "15px",
                fontSize: "28px"
              }}
            >
              {info[index].subtitle}
            </h2>
          </Fade>
          <Fade bottom>
            <p
              style={{
                fontFamily: "sans-serif",
                margin: "15px",
                fontSize: "20px"
              }}
            >
              {info[index].paragraph}
            </p>
          </Fade>
          <Fade bottom>
            <a href={info[index].linkto}>
              <p
                style={{
                  fontFamily: "sans-serif",
                  margin: "15px",
                  fontSize: "20px"
                }}
              >
                {info[index].linktext}
              </p>
            </a>
          </Fade>
        </div>
      );
}

export default text;
