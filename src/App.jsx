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
          
          <Route path="/"  element={<Home/>}/>
          <Route path="/login" element={<Login isLoggedIn={isLoggedIn}  setIsLoggedIn={setIsLoggedIn}/>}/>
          <Route path="/signup" element={<Signup isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>

          <Route path='/dashboard' element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
               <Dashboard/>
            </PrivateRoute>

          }/>
          

        </Routes>
               
    </div>
  )
}

export default App
