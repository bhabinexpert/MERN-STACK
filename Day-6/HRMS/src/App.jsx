import './App.css'
import { Routes, Route } from 'react-router-dom'
import LoginForm from './pages/login'
import Home from './pages/home'
import Employee from './pages/employee'
import Dashboard from './pages/dashboard'
import ProtectedRoute from './components/utils/protectedRoute'
import Unauthorized from './components/utils/unAuthorized'




function App() {

  return (
    <>
    <Routes>
      <Route path = '/' element = {<LoginForm/>}></Route>
      <Route path = "unauthorizedpage" element = {<Unauthorized/>}></Route>
        <Route
        path='home'
        element = {
          <ProtectedRoute>
            <Home/>
          </ProtectedRoute>
        }>
        <Route path = 'dashboard' element = {<Dashboard/>}></Route>
        <Route path = 'employee' element = {
          <ProtectedRoute allowedRoles={["hr","manager","admin"]}>
            <Employee/>
            
          </ProtectedRoute>
        }></Route>
        </Route>
    </Routes>
      
    </>
  ) 
}

export default App

