import React from 'react'
import logo from '../assets/Logo.svg'
import {Link ,Navigate,useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';
import { IoReorderThree } from "react-icons/io5";
import { useState } from 'react';
import { GiSplitCross } from "react-icons/gi";
function Navbar(props) {
  let isLoggedIn=props.isLoggedIn;
  let setIsLoggedIn=props.setIsLoggedIn;
 
  const [menuBar,setMenuBar]=useState(false);
  let navigate=useNavigate();
  function navigationHandler(){

     navigate("/");
     setIsLoggedIn(!isLoggedIn);
     toast.success("Log Out",{
      autoClose:800
     })
  }
 function hamburgerHandler(){
  setMenuBar(!menuBar);
  
 }


  
  return (
    <div className='navbar'>  
       <div>
           <img
              src={logo} alt="Logo" width={160} height={70}
            />
       </div> 
        
        <div className='links'>
             <Link to="/">Home</Link>
             <Link to="/about">About</Link>
             <Link to="/contact">Contact</Link>
        </div>
        <div className="btns">
          {
            !isLoggedIn&&
            <Link to="/login"><button >Log in</button></Link>
          }
          {
            !isLoggedIn&&
            <Link to="/signup"><button>Sign up</button></Link>
          }
          {
            isLoggedIn&&
            <Link to="/dashboard"><button>Dashboard</button></Link>
          }
          {
            isLoggedIn&&
            <button onClick={navigationHandler}>Log out</button>
          }
           
        </div>
        
     
        <div  className={menuBar?"mobile-navbar":"close-navbar"} onClick={hamburgerHandler}>
        { menuBar? 
          <GiSplitCross className='hamburger-menu'/>
        :
          <IoReorderThree className='hamburger-menu1'/>
        }

        <div className={menuBar?"mobile-menu":"close-menu"}>
        { menuBar?
              <div className='links1'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
               <Link to="/contact">Contact</Link>
              </div>:
              <div></div>
        }    
        {menuBar?
              <div className="btns1">
          {
            !isLoggedIn&&
            <Link to="/login"><p>Log in</p></Link>
          }
          {
            !isLoggedIn&&
            <Link to="/signup"><p>Sign up</p></Link>
          }
          {
            isLoggedIn&&
            <Link to="/dashboard"><p>Dashboard</p></Link>
          }
          {
            isLoggedIn&&
            <p onClick={navigationHandler}>Log out</p>
          }
           
              </div>:
              <div></div>
        }
        </div>

        </div>
    </div>
  )
}


export default Navbar
