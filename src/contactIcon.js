import React from "react";
import "boxicons";
import posed from "react-pose";


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

const ContactIcon = ({ href, name, type }) => {
  return (
    <a href={href}>
      <Icon>
        <box-icon name={name} type={type} size="md"></box-icon>
      </Icon>
    </a>
  );
};

export default ContactIcon;

