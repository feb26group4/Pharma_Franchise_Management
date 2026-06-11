import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import LoginComp from './components/LoginComp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeComp from './components/HomeComp'
import ProtectedRoute from './components/ProtectedRoutes'
import UserDashboard from './components/UserDashboard'
import LogoutComp from './components/LogoutComp'
import AdminDashboard from './components/AdminDashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeComp/>}>
        <Route path="login" element={<LoginComp/>}/>
        <Route path="register" element={<h1>Registration form</h1>}/>
      </Route>
        <Route path="/user" element={ <ProtectedRoute role={2}> <UserDashboard/> </ProtectedRoute>} >
                <Route path="users" element={<h1> Users</h1>} />
                <Route path="reports" element={ <h1> Reports</h1>} />
                <Route path="logout" element={ <LogoutComp />} /> 
      </Route>
        <Route path="/admin" element={<ProtectedRoute role={1}> <AdminDashboard/> </ProtectedRoute>} >
        </Route>
    </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default App
