import './App.css'
import { Routes, Route } from 'react-router-dom'
import LoginForm from './pages/login'
import Home from './pages/home'
import Employee from './pages/employee'
import Dashboard from './pages/dashboard'



function App() {

  return (
    <>
    <Routes>
      <Route path = '/' element = {<LoginForm/>}></Route>
      <Route path = 'home' element = {<Home/>}>
        <Route path = 'dashboard' element = {<Dashboard/>}></Route>
        <Route path = 'employee' element = {<Employee/>}></Route>
      </Route>
    </Routes>
      
    </>
  ) 
}

export default App

