import React, { useState } from "react";
import CustomInput from "../../atoms/Input/CustomInput";
import CustomButton from "../../atoms/Button/CustomButton";
import Dialog from "@mui/material/Dialog";
import style from "./SignIn.module.css";
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
            {form ? (
              <>
                <div className={style.form}>
                  <div>
                    <h1>Create your account</h1>
                  </div>
                  <div>
                    <CustomInput
                      customStyleInput={style.input1}
                      label="Name"
                      // handleOnchange={handleName}
                    />

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
                          <span style={{ color: "red" }}></span>
                        </>
                      )}
                      <span className={style.toggle} onClick={ToggleEU}>
                        {toggle ? (
                          <h6> Use Email instead </h6>
                        ) : (
                          <h6>Use Phone instead</h6>
                        )}
                      </span>
                      <div>
                        <CustomInput
                          customStyleInput={style.input2}
                          label="Password"
                          // handleOnchange={handlePassword}
                          type={"password"}
                        />
                        <span style={{ color: "red" }}></span>
                      </div>
                      <div>
                        <div>
                          <h4 style={{ color: "white" }}>Date of birth</h4>
                          <p style={{ color: "grey", width: "27rem" }}>
                            This will not be shown publicly. Confirm your own
                            age, even if this account is for a business, a pet,
                            or something else.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* <div className={styleDob.container}>
                    <Month handleOnchange={handleMonth} />
                    <Date handleOnchange={handleDate} />
                    <Dayy handleOnchange={handleDay} />
                  </div> */}
                    <span style={{ color: "red" }}></span>
                  </div>
                  <div>
                    <CustomButton
                      buttonText="next"
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
                <div>
                  <CustomButton
                    icon={<i class="fa fa-brands fa-google"></i>}
                    buttonText="Sign in with google"
                    customCss={style.CustomButton1}
                  ></CustomButton>
                </div>
                <br />
                <div>
                  <CustomButton
                    icon={<i class="fa fa-brands fa-apple"></i>}
                    buttonText="Sign in with Apple"
                    customCss={style.CustomButton2}
                  />
                </div>
                <div className={style.or}>
                  <p className={style.line}>____</p>
                  OR
                  <p className={style.line}>____</p>
                </div>
                <div className={style.signupbtn}>
                  <CustomButton
                    handleButtonEvent={Form}
                    buttonText="sign up with phone number or email"
                    customCss={style.CustomButton2}
                  />
                  <p>
                    By signing up, you agree to the Terms of Service <br />
                    and Privacy Policy, including Cookie Use.
                  </p>
                </div>
                <div className={style.txt2}>Have an Account Already..?</div>
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
