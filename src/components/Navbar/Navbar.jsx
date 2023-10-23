import React, { useEffect, useState } from "react";
import "./navbar.css"
import { authentication } from "../../Firebase/Firebase-config";
import {  RecaptchaVerifier,signInWithPhoneNumber } from "firebase/auth";
import {AiOutlineClose} from "react-icons/ai"
import {GiHamburgerMenu} from "react-icons/gi"
const Navbar = () => {
const [active,setactive]=useState(true)
const countrycode="+91"
const [phoneNumber,setphoneNumber]=useState("")
const [Otp,setOtp]=useState("")
const [hide,sethide]=useState(true)
const user = authentication.currentUser;

useEffect(()=>{
  console.log(user)
},[user])
const requestotp=(e)=>{
  e.preventDefault();
  const number=countrycode+phoneNumber
  console.log("hit")
  
  setactive(false)
  window.recaptchaVerifier = new RecaptchaVerifier(authentication, 'recaptcha-container', {
    'size': 'invisible',
    'callback': (response) => {
      // reCAPTCHA solved, allow signInWithPhoneNumber.
     console.log(response)
    }
  });
  let appVerifier= window.recaptchaVerifier
  signInWithPhoneNumber(authentication, number, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      console.log(confirmationResult)

      // ...
    }).catch((error) => {
      console.log(error)
      // Error; SMS not sent
      // ...
    });
    setphoneNumber("")
}
const verifyotp=(e)=>{
  e.preventDefault()
  let confirmationResult=window.confirmationResult;
  confirmationResult.confirm(Otp).then((result) => {
    // User signed in successfully.
    const user = result.user;
    sethide(true)
    // ...
  }).catch((error) => {
    // User couldn't sign in (bad verification code?)
    // ...
  });
}
  return(
  <>

  <div className=" nav sticky top-0 w-screen h-24 bg-white  flex justify-center items-center z-20">
    <div className=" w-4/5 flex justify-center items-center">
    <div className=" w-1/2 flex items-center">
      <div className="flex justify-center items-center">
            <img className=" w-14 h-14" src="./zingt1.png" alt="" />
            <h1 className=" text-violet-600 font-bold text-2xl">zingbus</h1>
          </div>
          </div>
          <div onClick={()=>sethide(false)} className="w-1/2 flex justify-end items-end flex-col hover:cursor-pointer">
            {user===null?<div className="">
            <h1 className=" font-bold text-violet-600">Signup</h1>
          <p className=" text-xs">And <span className=" font-semibold">Get ₹200 OFF</span>  on first booking
          </p>
            </div>:<div className=""><GiHamburgerMenu/></div>}
  
          </div>
    </div>

  </div>
  <div style={{display:hide?"none":"block"}} className="">
  <div  className=" fixed flex top-0 w-screen h-screen z-30 bg-black opacity-20 ">


</div>
<div className=" login fixed right-0 top-0 w-2/5  h-full bg-white  z-50 flex flex-col  items-start py-28 px-20 ">
  <div onClick={()=>sethide(true)} className=" text-xl absolute right-10 top-10 hover:cursor-pointer">
    <AiOutlineClose/>
  </div>
<div className="">
  <h1 className=" text-5xl">Login</h1>
</div>
<div className=" mt-44 flex flex-col">
  <div className=" w-max flex items-center border border-slate-500 py-3 px-12 rounded-lg relative">
    {active&&<img className=" w-6 h-5 absolute left-4" src="https://cdn.britannica.com/97/1597-050-008F30FA/Flag-India.jpg" alt="" />}
    {active&&<h1 className=" text-lg mr-2">+91</h1>}
  {active?<input value={phoneNumber}  onChange={(e)=>setphoneNumber(e.target.value)} className="  outline-none" type="text" placeholder="Mobile Number" />:<input value={Otp} onChange={(e)=>setOtp(e.target.value)} className="  outline-none" type="text" placeholder="Enter OTP" />}
  </div>

{active?<button onClick={(e)=>requestotp(e)} className=" w-max bg-violet-600 text-white px-28 py-4 mt-4 rounded-lg">Request otp</button>:<button onClick={(e)=>verifyotp(e)} className=" w-max bg-violet-600 text-white px-28 py-4 mt-4 rounded-lg">Login</button>}
</div>

<div className="" id="recaptcha-container"></div>
</div>
  </div>

  </>)
};

export default Navbar;
