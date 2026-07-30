import { NavLink, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function DashboardLayout({ title, navItems }) {
    const user = useSelector((state) => state.auth.user);

    return (
        <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>

            {/* HEADER */}
            <header className="d-flex justify-content-between align-items-center px-4 py-2 border-bottom bg-white shadow-sm">
                <span className="navbar-brand fw-bold text-primary">MediSync</span>
                <div className="d-flex align-items-center gap-3">
                    <span>{title}</span>
                    {user && <span className="text-muted">Hi, {user.fname || user.uname}</span>}
                </div>
            </header>

            {/* BODY */}
            <div className="d-flex flex-grow-1">
                <ul className="nav nav-pills flex-column p-3 border-end" style={{ minWidth: "200px" }}>
                    {navItems.map((item) => (
                        <li className="nav-item" key={item.to}>
                            <NavLink to={item.to} className="nav-link">
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                    <li className="nav-item">
                        <NavLink to="logout" className="nav-link">Logout</NavLink>
                    </li>
                </ul>

                <div className="p-3 flex-grow-1">
                    <Outlet />
                </div>
            </div>

            {/* FOOTER */}
            <footer className="text-center py-2 border-top bg-light text-muted small">
                © {new Date().getFullYear()} MediSync. All rights reserved.
            </footer>
        </div>
    );
}