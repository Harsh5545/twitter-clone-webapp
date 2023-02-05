import React, { useState } from "react";
import CustomInput from "../../atoms/Input/Input";
import CustomButton from "../../atoms/Button/CustomButton";
import Dialog from "@mui/material/Dialog";
import style from "./SignUpForm.module.css";
import { FcGoogle } from "react-icons/fc";
import AppleIcon from "@mui/icons-material/Apple";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Month, Date, Dayy } from "../../component/Dob/Dob";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { useRecoilState } from "recoil";
import { isLoginAtom } from "../../Recoil/Atom"
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import {
  isValidEmailSyntax ,
  isValidMobile,
  isOnlyLetters,
  isValidString,
} from '../../Helper'
import { nanoid } from "nanoid";
// import { dateArray,
//   yearArray,
//   monthArray,} from "../../ConstData"
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
function SignUpForm() {
  const [isOpen, SetisOpen] = useState(true);
  const [form, Setform] = useState(false);
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const [name , setName] = useState('')
  const [phone , setPhone] = useState('')
  const [email , setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [data,setData]=useState([])
  const [loginStatus,setLoginStatus ]= useRecoilState(isLoginAtom);


  function Form() {
    Setform(true);
  }
  function ToggleEU() {
    setToggle(!toggle);
  }
  function handleName (e) {
      setName(e.target.value)
  }

  function handlePhone (e) {
      setPhone(e.target.value)
  }

  function handleEmail (e) {
      setEmail(e.target.value)
  }

  function handlePassword (e) {
      setPassword(e.target.value)
  }

  function handleSubmit (){

    if(!isValidString(name) || !isOnlyLetters(name)){
        alert('Invalid name !!')
        return
    }
    if(!email && !phone){
        alert('Please add email or phone to continue !!')
        return
    }
    if(email && !isValidEmailSyntax(email)){
        alert('Please add proper Email !!')
        return
    }
    if(phone && !isValidMobile(phone)){
        alert('Please add proper phone !!')
        return
    }
    if(!isValidString(password)){
        alert('please set your account password !!')
        return
    }
    data.push(userData)
    setData(data)
    localStorage.setItem('userData',JSON.stringify(data))
    localStorage.setItem('loginUser',JSON.stringify(userData))
   

  toast('sucess')
  setLoginStatus(true)
  navigate("/Home")
}
 const userData = {
  // id:Math.floor(Math.random()*1000),
  id:nanoid(3),
  name,
  ...(phone && {phone}),
  ...(email && {email}),
  password,
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
                      handleChange={handleName}
                    />
                    </div>

                    <span style={{ color: "red" }}></span> 
                    <div className={style.toogleData}>
                      {toggle ? (
                        <>
                          <CustomInput
                            customStyleInput={style.input2}
                            label="Phone"
                            handleChange={handlePhone}
                            value={phone}
                          />
                          <span style={{ color: "red" }}></span>
                        </>
                      ) : (
                        <>
                          <CustomInput
                            customStyleInput={style.input2}
                            label="email"
                            handleChange={handleEmail}
                            value={email}
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
                          handleChange={handlePassword}
                          type={"password"}
                          value={password}
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
                    <Month
                    //  handleOnchange={handleMonth}
                      />
                    <Date
                    //  handleOnchange={handleData}
                     />
                    <Dayy
                    //  handleOnchange={handleDay}
                     />
                  </div>
                
                  
                  <div>
                  <CustomButton
                      buttonText="Next"
                      customCss={style.formbtn}
                      handleButtonEvent={handleSubmit}
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
               
                <div className={style.txt3}>Have an Account Already..? <span  style={{color:"#00acee"}}>
                  <Link style={{ color: "#00acee",textDecoration:'none' } } to='/'>Log in</Link></span></div>
              </>
            )}
          </div>
        </div>
        {/* </div> */}
      </Dialog>
      <ToastContainer/>
    </>
  );
}

export default SignUpForm;