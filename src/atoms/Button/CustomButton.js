import React from "react";
import style from "./Button.module.css";
function CustomButton(props) {
  return (
    <button
      className={`${style.btnFilled} ${props.customCss}`}
      type={props.type}
      onClick={props.handleButtonEvent}
    >
      {props.icons}
      {props.buttonText}
    </button>
  );
}

export default CustomButton;
