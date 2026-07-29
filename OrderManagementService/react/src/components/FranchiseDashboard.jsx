import { NavLink, Outlet } from "react-router-dom"

export default function FranchiseDashboard(){
    return(
        <>
            <h2>Admin Panel</h2>
         <div className="d-flex">         

           <ul className="nav nav-pills flex-column p-3 border-end">
            <li className="nav-item">
            <NavLink to="manage">Manage profile</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="placeorder">place stock order</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="role3">track order</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="role4">view invoices/payments</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="role5">role5</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="role6">role6</NavLink>
            </li>
            <li className="nav-item">   
            <NavLink to="logout">Logout</NavLink>
            </li>
          </ul>
        
        <div className="p-3 flex-grow-1">
            <Outlet />
        </div>
        </div>
        </>
    )
}