import React from 'react'
import logo from '../assets/Logo.svg'
import {Link ,useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';

function Navbar(props) {
  let isLoggedIn=props.isLoggedIn;
  let setIsLoggedIn=props.setIsLoggedIn;
  let navigate=useNavigate();
  function navigationHandler(){

     navigate("/");
     setIsLoggedIn(!isLoggedIn);
     toast.success("Log Out",{
      autoClose:800
     })
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
    </div>
  )
}

export default Navbar
