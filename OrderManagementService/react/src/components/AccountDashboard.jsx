import { NavLink, Outlet } from "react-router-dom"

export default function AccountDashboard(){
    return(
        <>
            <h2>Account Panel</h2>
         <div className="d-flex">         

           <ul className="nav nav-pills flex-column p-3 border-end">
            <li className="nav-item">
            <NavLink to="viewapp">View Application</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="track">Track Application</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="role3">Raise quotation</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="role4">role4</NavLink>
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