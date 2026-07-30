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
import WarehouseDashboard from './components/WarehouseDashboard'
import AccountDashboard from './components/AccountDashboard'
import FranchiseDashboard from './components/FranchiseDashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeComp/>} />
          <Route path="/login" element={<LoginComp/>} />
          <Route path="/register" element={<h1>Register Form</h1>} />
          <Route path="/user" element={<ProtectedRoute role={2} ><UserDashboard/></ProtectedRoute>}>
                <Route path="search" element={<h1> Search</h1>} />
                <Route path="booking" element={ <h1> Booking</h1>} />
                <Route path="logout" element={ <LogoutComp />} />
          </Route>
          
          
          <Route path="/admin" element={<ProtectedRoute role={1} ><AdminDashboard/></ProtectedRoute>}>
                <Route path="users" element={<h1> Users</h1>} />
                <Route path="reports" element={ <h1> Reports</h1>} />
                <Route path="role3" element={ <h1> product catalog</h1>} />
                <Route path="role4" element={ <h1> view applications</h1>} />
                <Route path="role5" element={ <h1> change status of applications</h1>} />
                <Route path="role6" element={ <h1> create dept heads</h1>} />
                <Route path="logout" element={ <LogoutComp />} />
          </Route>

          <Route path="/warehouse" element={<ProtectedRoute role={3} ><WarehouseDashboard/></ProtectedRoute>}>
                <Route path="inventory" element={<h1> Inventory</h1>} />
                <Route path="orders" element={ <h1>View Orders </h1>} />
                <Route path="role3" element={ <h1> Raise request</h1>} />
                <Route path="role4" element={ <h1> Dispatch</h1>} />
                <Route path="role5" element={ <h1> role 5</h1>} />
                <Route path="role6" element={ <h1> role 6</h1>} />
                <Route path="logout" element={ <LogoutComp />} />
          </Route>

          <Route path="/account" element={<ProtectedRoute role={4} ><AccountDashboard/></ProtectedRoute>}>
                <Route path="viewapp" element={<h1> View Applications</h1>} />
                <Route path="track" element={ <h1>Track Application </h1>} />
                <Route path="role3" element={ <h1> Raise quotation</h1>} />
                <Route path="role4" element={ <h1> role 4</h1>} />
                <Route path="role5" element={ <h1> role 5</h1>} />
                <Route path="role6" element={ <h1> role 6</h1>} />
                <Route path="logout" element={ <LogoutComp />} />
          </Route>

          <Route path="/franchise" element={<ProtectedRoute role={5} ><FranchiseDashboard/></ProtectedRoute>}>
                <Route path="manage" element={<h1> manage profile</h1>} />
                <Route path="placeorder" element={ <h1>place stock Orders </h1>} />
                <Route path="role3" element={ <h1> track order</h1>} />
                <Route path="role4" element={ <h1> view invoices/payments</h1>} />
                <Route path="role5" element={ <h1> role 5</h1>} />
                <Route path="role6" element={ <h1> role 6</h1>} />
                <Route path="logout" element={ <LogoutComp />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
    
  )
}

export default App
