import React, { useState } from "react";
import CustomInput from "../../atoms/Input/Input";
import Dialog from "@mui/material/Dialog";
import CustomButton from "../../atoms/Button/CustomButton";
import style from "./SignIn.module.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
function SignInForm() {
  const [isOpen, SetisOpen] = useState(true);

  return (
    <Dialog
      open={isOpen}
      style={{
        background: "rgba(91, 112, 131, 0.4)",
        fontSize: "15px",
          lineHeight: "40px",
        border:"20px"
      }}
    >
      <div className={style.wrapper}>
        <div className={style.twitterIconWrapper}>
          <TwitterIcon fontSize="large" sx={{ color: "#00acee" }} />
        </div>
        <h1>Sign in to Twitter</h1>
        <CustomButton
          buttonText="Sign in with Google"
          customCss={style.btn}
          icons={<GoogleIcon />}
        />
        <CustomButton
          buttonText="Sign in with Apple"
          customCss={style.btn}
          icons={<AppleIcon />}
        />
      
          <span> <hr/>or<hr/></span>
        
        <CustomInput
          label="Phone, Email, or Username"
          customStyleInput={style.inputCss}
        />
              <CustomButton buttonText="Next" customCss={style.nextBtn} />
              <CustomButton buttonText="Forgot Password?" customCss={style.btn} />
      </div>
    </Dialog>
  );
}

export default SignInForm;
