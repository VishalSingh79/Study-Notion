import React from 'react'
import signup from '../assets/signup.png'
import frame from '../assets/frame.png'
import { IoIosEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


function Signup(props) {
      
   const [open1,setOpen1]=useState(false);
   const [open2,setOpen2]=useState(false);
   let setIsLoggedIn=props.setIsLoggedIn;
   let isLoggedIn=props.isLoggedIn;
   let navigate=useNavigate();
   const [accountType,setAccountType]=useState("Student");
   
   const addBorder={
     backgroundColor:"rgba(0, 0, 0, 0.537)",
     color:"white"
   }
   const removeBorder={
    backgroundColor:"inherit",
    color:"rgba(255, 255, 255, 0.607)"
   }

  const [signUpData,setSignUpData]=useState({ 
    firstname:"",
    lastname:"",
    email:"",
    password:"",
    confirmpassword:""
    }); 
   
    function changeFormHandler(event){
      setSignUpData((prevData)=>{
        return {
          ...prevData,
          [event.target.name]:event.target.value
        }
      })
    }

   function formHandler(event)
   {
     event.preventDefault();
     
     
     if(signUpData.confirmpassword==signUpData.password)
      {
        setIsLoggedIn(!isLoggedIn);
        navigate("/dashboard");
        toast.success("Account Created",{
          autoClose:800
        });
      console.log(signUpData);
      const accountData={
        ...signUpData,
        "Account Type":accountType
      }
      console.log(accountData);
      }
      else{
        toast.warning("Password doesn't match",{
          autoClose:800
        });
      }
      
      
   }
   function changeHandler1()
   {
    setOpen1(!open1);
   }
   function changeHandler2()
   {
    setOpen2(!open2);
   }
   function accountTypeHandler(event)
   {
      
      setAccountType(event.target.innerHTML);
  }
    
  // 
//
  return (
    <div className='pages'> 
    <div className='part1'>
        <h2 className='title'>Join the millions learning to code with StudyNotion for free</h2>
        <div className='title-desc'>
        <p className='desc1'>Build skills for today,tomorrow and beyond.</p>
        <p className='desc2'>Education to future-proof your Carrier.</p>
        </div>
        <div className='form-type'>
          <p className='btn-formtype' onClick={accountTypeHandler} style={accountType==="Student" ? addBorder : removeBorder}>Student</p>
          <p className='btn-formtype' onClick={accountTypeHandler} style={accountType==="Instructor"?addBorder : removeBorder} >Instructor</p>
        </div>
     <form onSubmit={formHandler}>
        
     <div className='name-section'>
      <div>
       <label htmlFor='fname'>First Name<sup className='sups'>*</sup></label>
       <br/>
       <input type='name' placeholder='Enter First Name' name='firstname' id='fname' value={signUpData.firstname} onChange={changeFormHandler} required className='input-sec'/>
      
       </div>
       <div>
       <label htmlFor='lname'>Last Name<sup className='sups'>*</sup></label>
       <br/>
       <input type='name' placeholder='Enter Last Name' name='lastname' id='lname' value={signUpData.lastname} onChange={changeFormHandler}  required className='input-sec'/>
         </div>
       </div>
       {/* <br/> */}
       <div>
       <label htmlFor='email' >Email Address<sup className='sups'>*</sup></label>
        <br/>
        <input type='email' placeholder='Enter Email ID' name='email' id='email' value={signUpData.email} onChange={changeFormHandler}  required className='input-sec'/>
        </div>
        {/* <br/> */}

      
       <div className='name-section'>
       <div>
       <label htmlFor='ppassword'>Password<sup className='sups'>*</sup></label>
       <br/>
   
      <input type={open1? "text":"password"} placeholder='Enter Password' name='password' id='ppassword' value={signUpData.password} onChange={changeFormHandler}  required className='input-sec'/>
      
       {
        open1?        
         <IoIosEye onClick={changeHandler1} className='eye-size'/>      
        :    
          <IoIosEyeOff onClick={changeHandler1} className='eye-size'/>     
       }
       </div>
        <div >
       <label htmlFor='cpassword'>Confirm Password<sup className='sups'>*</sup></label>
       <br/>
       <input type={open2 ? "text":"password"} placeholder='Enter Confirm Password' name='confirmpassword' id='cpassword' value={signUpData.confirmpassword} onChange={changeFormHandler}  required className='input-sec'/>
       {
        open2?     
        <IoIosEye onClick={changeHandler2} className='eye-size'/>
        :
        <IoIosEyeOff onClick={changeHandler2} className='eye-size'/>
       }
       </div>
       </div>
      
       
       <button className='btn-submit'>Sign up</button>

     </form>
     <div>------------------------------- OR -------------------------------</div>
      <button className='btn-google'>Sign up with Google</button>
    </div>
    <div className='part2'>
      <img src={signup}  width={320} height={300} className='img1'/>
      <img src={frame}  width={320} height={300} className='img2'/>
    </div>
 </div>
  )
}

export default Signup
