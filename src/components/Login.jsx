import React from 'react'
import login from '../assets/login.png'
import frame from '../assets/frame.png'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useState } from 'react';
function Login(props) {
    let setIsLoggedIn=props.setIsLoggedIn;
    let isLoggedIn=props.isLoggedIn;
    let navigate=useNavigate();
    function changeHandler(event)
    {
      event.preventDefault();
      setIsLoggedIn(!isLoggedIn);
      navigate("/dashboard");
      toast.success("Login Successfull",{
        autoClose:800
      });
    
    }

    const [signInData,setSignInData]=useState({
      email:"",
      password:"",
      }); 
     
      function changeFormHandler(event){
        setSignInData((prevData)=>{
          return {
            ...prevData,
            [event.target.name]:event.target.value
          }
        })
      }
     
    function formHandler(event)
   {
     event.preventDefault();  
        setIsLoggedIn(!isLoggedIn);
        navigate("/dashboard");
        toast.success("Login Successfull",{
          autoClose:800
        });
        console.log(signInData);
   
   }



  return (
    <div className='pages'> 
       <div className='part1'>
           <h2 className='title'>WELCOME BACK</h2>
           <div className='title-desc'>
           <p className='desc1'>Build skills for today,tomorrow and beyond.</p>
           <p className='desc2'>Education to future-proof your Carrier.</p>
           </div>
        <form onSubmit={formHandler}>
          <label htmlFor='email'>Email Address<sup className='sups'>*</sup></label>
          <br/>
          <input type='email' placeholder='Enter Your Email' name='email' id='email' required value={signInData.email} onChange={changeFormHandler} className='input-sec1'/>
          <br/>
          <br/>
          <label htmlFor='password'>Password<sup className='sups'>*</sup></label>
          <br/>
          <input type='text' placeholder='Enter Your Password' name='password' id='password' required value={signInData.password} onChange={changeFormHandler} className='input-sec1'/>
          <p className='fpass'>Forget Password</p>
          <button className='btn-submit2'>Sign In</button>

        </form>
        <div>-------------------- OR ---------------------</div>
        <button className='btn-google2'>Sign up with Google</button>
       </div>
       <div className='part2'>
         <img src={login}  width={320} height={300} className='img1'/>
         <img src={frame}  width={320} height={300} className='img2'/>
       </div>
    </div>
  )
}

export default Login
