import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import LoginForm from './pages/login'
import Home from './pages/home'
import Employee from './pages/employee'


function App() {

  return (
    <>
    <Routes>
      <Route path = '/' element = {<LoginForm/>}></Route>
      <Route path = 'home' element = {<Home/>}>
        <Route path = 'employee' element = {<Employee/>}> </Route>
      </Route>
    </Routes>
      
    </>
  ) 
}

export default App
