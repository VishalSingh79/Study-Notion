import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import {Route,Routes} from 'react-router-dom'
import Home from "./components/Home"
import Signup from './components/Signup'
import Login from './components/Login'
import About from './components/About'
import Contact from './components/Contact'
import Dashboard from './components/Dashboard'
import PrivateRoute from './components/PrivateRoute'

function App() {
  const [isLoggedIn,setIsLoggedIn]=useState(false);

  return (
    <div className='container'>

        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

        <Routes>
          
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login isLoggedIn={isLoggedIn}  setIsLoggedIn={setIsLoggedIn}/>}></Route>
          <Route path="/signup" element={<Signup isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>

          <Route path='/dashboard' element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
               <Dashboard/>
            </PrivateRoute>
          }></Route>
          

        </Routes>
               
    </div>
  )
}

export default App
