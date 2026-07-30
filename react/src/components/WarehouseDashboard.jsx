import { NavLink, Outlet } from "react-router-dom"

export default function WarehouseDashboard(){
    return(
        <>
            <h2>Warehouse Panel</h2>
         <div className="d-flex">         

           <ul className="nav nav-pills flex-column p-3 border-end">
            <li className="nav-item">
            <NavLink to="inventory">Current Inventory</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="orders">View Orders</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="role3">Raise Request</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="role4">Dispatch</NavLink>
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