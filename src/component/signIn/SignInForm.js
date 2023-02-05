import React, { useState } from "react";
import CustomInput from "../../atoms/Input/Input";
import Dialog from "@mui/material/Dialog";
import CustomButton from "../../atoms/Button/CustomButton";
import style from "./SignIn.module.css";
import TwitterIcon from "@mui/icons-material/Twitter";

import { FcGoogle } from "react-icons/fc";
// import FcGoogle from 'react-icons/fc'
import AppleIcon from "@mui/icons-material/Apple";
function SignInForm() {
  const [isOpen, SetisOpen] = useState(true);
    const [nextBtn, setNextBtn] = useState(false);
    function handle() {
            setNextBtn(!nextBtn)
        }

  return (
    <Dialog
      open={isOpen}
      style={{
        background: "rgba(91, 112, 131, 0.4)",
        fontSize: "15px",
        lineHeight: "40px",
        border: "25px",
      }}
    >
      <div className={style.wrapper}>
        <div className={style.twitterIconWrapper}>
          <TwitterIcon fontSize="large" sx={{ color: "#00acee" }} />
              </div>
              {
                  nextBtn ?          <div className={style.container}>
                  <div className={style.signtext}>
                   
                    <h1>Sign in to Twitter</h1>
                  </div>
                  <CustomButton
                    buttonText="Sign in with Google"
                    customCss={style.btn}
                    icons={<FcGoogle />}
                  />
                  <CustomButton
                    buttonText="Sign in with Apple"
                    customCss={style.btn}
                    icons={<AppleIcon />}
                  />
          
                 <div className={style.ortext}> <h3 className={style.hrlines}><span style={{color:'black',fontWeight:'lighter'}}>or</span></h3></div>
                  <CustomInput
                    label="Phone, Email, or Username"
                    customStyleInput={style.inputCss}
                  />
                  <CustomButton buttonText="Next" customCss={style.nextBtn} handleButtonEvent={handle} />
                        <CustomButton buttonText="Forgot Password?" customCss={style.btn} />
                        
                        <div className={style.text}>
                          <h4>Don't have an account?<span style={{color:"#00acee"}}>Sign up</span> </h4>
                            </div>
                  </div> : 
                          <div  >
                          <div className={style.wrapperPassword}>
                          <div className={style.passwordtext}>
                   
                   <h1>Enter Your Password</h1>
                          </div>
                          
                          <div>
                          <CustomInput
                                  label="Password"
                                //   type={type}
                    customStyleInput={style.inputCss2}
                              />
                              <div className={style.text}>
                       <span style={{color:"#00acee"}}>Forgot password?</span>
                            </div>
                              </div>
                              
                       </div>
                          
                          <CustomButton buttonText="Next" customCss={style.loginbtn} handleButtonEvent={handle} />
                          </div>
                
                    
     }
      </div>
    </Dialog>
  );
}

export default SignInForm;
