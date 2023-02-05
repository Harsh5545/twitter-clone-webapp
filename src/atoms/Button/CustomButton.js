import React from 'react'
import style from "./Button.module.css"
function CustomButton(props) {
  return (
      <button className={`${style.btnFilled} ${props.customCss}`}  onClick={props.handleButtonEvent}>
        {props.icons}
          {props.buttonText}
          
    </button>
  )
}

export default CustomButton