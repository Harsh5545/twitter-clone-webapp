import React, { useState } from "react";
import CustomInput from "../../atoms/Input/Input";
import CustomButton from "../../atoms/Button/CustomButton";
import Dialog from "@mui/material/Dialog";
import style from "./SignUpForm.module.css";
import { FcGoogle } from "react-icons/fc";
import AppleIcon from "@mui/icons-material/Apple";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Month, Date, Dayy } from "../../component/Dob/Dob";
// import { dateArray,
//   yearArray,
//   monthArray,} from "../../ConstData"
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
function SignUpForm() {
  const [isOpen, SetisOpen] = useState(true);
  const [form, Setform] = useState(false);
  const [toggle, setToggle] = useState(false);

  function Form() {
    Setform(true);
  }
  function ToggleEU() {
    setToggle(!toggle);
  }

  return (
    <>
      <Dialog
        open={isOpen}
        style={{
          background: "rgba(91, 112, 131, 0.4)",
          fontSize: "15px",
          lineHeight: "40px",
        }}
      >
        {/* <div className={style.container}> */}
        <div className={style.container1}>
          <div className={style.mainContainer}>
          <div className={style.twitterIconWrapper}>
          <TwitterIcon fontSize="large" sx={{ color: "#00acee" }} />
              </div>
            {form ? (
              <>
                <div className={style.form}>
                  <div className={style.formtext1}>
                    <h1>Create your account</h1>
                  </div>
                  <div>
                    <CustomInput
                      customStyleInput={style.input1}
                      label="Name"
                      // handleOnchange={handleName}
                    />
                    </div>

                    <span style={{ color: "red" }}></span> 
                    <div className={style.toogleData}>
                      {toggle ? (
                        <>
                          <CustomInput
                            customStyleInput={style.input2}
                            label="Phone"
                            // handleOnchange={handleMobile}
                          />
                          <span style={{ color: "red" }}></span>
                        </>
                      ) : (
                        <>
                          <CustomInput
                            customStyleInput={style.input2}
                            label="email"
                            // handleOnchange={handleEmail}
                          />
                       
                        </>
                      )}
                      <span className={style.toggle} style={{color:"#00acee"}} onClick={ToggleEU}>
                        {toggle ? (
                          <h6> Use Email instead </h6>
                        ) : (
                          <h6>Use Phone instead</h6>
                        )}
                      </span>
                      </div>
                      <div>
                        <CustomInput
                          customStyleInput={style.input3}
                          label="Password"
                          // handleOnchange={handlePassword}
                          type={"password"}
                        />
                        <span style={{ color: "red" }}></span>
                      </div>
                      
                        <div className={style.text2}>
                          <h4 style={{ color: "black" }}>Date of birth</h4>
                          <p style={{ color: "grey" }}>
                            This will not be shown publicly. Confirm your own
                            age, even if this account is for a business, a pet,
                            or something else.
                          </p>  
                        </div>
                      
                   
                    <div className={style.Dob}>
                    <Month />
                    <Date />
                    <Dayy />
                  </div>
                
                  
                  <div>
                  <CustomButton
                      buttonText="Next"
                      customCss={style.formbtn}
                      // btnNext={submitFunction}
                    ></CustomButton>
                  </div>
                 
                  
                </div>
              </>
            ) : (
              <>
                <p className={style.logo}>
                  <i class="fa fa-brands fa-twitter"></i>
                </p>
                <h1>Join Twitter today</h1>
               
                  <CustomButton
                    // icon={<i class="fa fa-brands fa-google"></i>}
                    buttonText="Sign in with google"
                    customCss={style.CustomButton1}
                    icons={<FcGoogle />}
                  ></CustomButton>
                
                
                  <CustomButton
                    // icon={<i class="fas fa-brands fa-apple"></i>}
                    buttonText="Sign in with Apple"
                    customCss={style.CustomButton2}
                    icons={<AppleIcon />}
                  />
              
                {/* <span className={style.or}>
                <hr style={{width:"7rem" , height:"0" , marginTop:"1.2rem"}}/>
                 OR
                <hr style={{width:"7rem" , height:"0" , marginTop:"1.2rem"}}/>
                </span> */}
                  <div className={style.ortext}> <h3 className={style.hrlines}><span style={{color:'black',fontWeight:'lighter'}}>or</span></h3></div>
                
                <div className={style.signupbtn}>
                  <CustomButton
                    handleButtonEvent={Form}
                    buttonText="Create Account"
                    customCss={style.CustomButton3}
                  />
                  </div>
                  <div className={style.para}>
              
                    By signing up, you agree to the <span  style={{color:"#00acee"}}>Terms of Service </span>
                    and<span  style={{color:"#00acee"}}> Privacy Policy</span>, including<span  style={{color:"#00acee"}}> Cookie Use</span>.
            
                  </div>
               
                <div className={style.txt3}>Have an Account Already..? <span  style={{color:"#00acee"}}>Log in</span></div>
              </>
            )}
          </div>
        </div>
        {/* </div> */}
      </Dialog>
    </>
  );
}

export default SignUpForm;