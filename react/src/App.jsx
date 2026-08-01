import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomeComp from "./components/HomeComp";
import LoginComp from "./components/LoginComp";
import RegisterComp from "./components/RegisterComp";
import ProtectedRoute from "./components/ProtectedRoutes";
import AdminDashboard from "./components/AdminDashboard";
import WarehouseDashboard from "./components/WarehouseDashboard";
import FranchiseDashboard from "./components/FranchiseDashboard";
import AccountDashboard from "./components/AccountDashboard";
import UserDashboard from "./components/UserDashboard";
import LogoutComp from "./components/LogoutComp";
import ViewApplications from "./components/ViewApplication";
import ProductCatalog from "./components/ProductCatalog";
import UpdateStock from "./components/UpdateStock";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeComp />} />
                <Route path="/login" element={<LoginComp />} />
                <Route path="/register" element={<RegisterComp />} />
                <Route path="/unauthorised" element={<h1>401 - Unauthorized Access</h1>} />

                <Route path="/user" element={<ProtectedRoute role={5}><UserDashboard /></ProtectedRoute>}>
                    <Route path="search" element={<h1>Search</h1>} />
                    <Route path="booking" element={<h1>Booking</h1>} />
                    <Route path="logout" element={<LogoutComp />} />
                </Route>

                <Route path="/admin" element={<ProtectedRoute role={1}><AdminDashboard /></ProtectedRoute>}>
                    <Route path="users" element={<h1>Users</h1>} />
                    <Route path="reports" element={<h1>Reports</h1>} />
                    <Route path="ProductCatalog" element={<ProductCatalog/>} />
                    <Route path="ViewApplication" element={<ViewApplications/>} />
                    <Route path="ApplicationStatus" element={<h1>Change Application Status</h1>} />
                    <Route path="Department" element={<h1>Create Department Heads</h1>} />
                    <Route path="logout" element={<LogoutComp />} />
                </Route>

                <Route path="/warehouse" element={<ProtectedRoute role={2}><WarehouseDashboard /></ProtectedRoute>}>
                    <Route path="inventory" element={<UpdateStock/>} />
                    <Route path="orders" element={<h1>View Orders</h1>} />
                    <Route path="request" element={<h1>Raise Request</h1>} />
                    <Route path="dispatch" element={<h1>Dispatch</h1>} />
                    <Route path="logout" element={<LogoutComp />} />
                </Route>

                <Route path="/account" element={<ProtectedRoute role={4}><AccountDashboard /></ProtectedRoute>}>
                    <Route path="viewapp" element={<h1>View Applications</h1>} />
                    <Route path="track" element={<h1>Track Application</h1>} />
                    <Route path="quotation" element={<h1>Raise Quotation</h1>} />
                    <Route path="logout" element={<LogoutComp />} />
                </Route>

                <Route path="/franchise" element={<ProtectedRoute role={3}><FranchiseDashboard /></ProtectedRoute>}>
                    <Route path="manage" element={<h1>Manage Profile</h1>} />
                    <Route path="placeorder" element={<h1>Place Stock Orders</h1>} />
                    <Route path="trackorder" element={<h1>Track Order</h1>} />
                    <Route path="payments" element={<h1>View Invoices / Payments</h1>} />
                    <Route path="logout" element={<LogoutComp />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;