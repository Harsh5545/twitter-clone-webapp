import React from 'react'

function CustomButton(props) {
  return (
      <button className={`${style.inputField} ${props.customCss}`} style={{outline:"none", border:"none"}} onClick={props.handleButtonEvent}>
          {props.buttonText}
          
    </button>
  )
}

export default CustomButton