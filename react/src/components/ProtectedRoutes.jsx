import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, role }) {

    const loginState = useSelector((state) => state.auth);

    // Get values from Redux first
    let user = loginState.user;
    let token = loginState.token;

    // If Redux is empty (page refresh), use localStorage
    if (!token) {
        token = localStorage.getItem("token");
    }

    if (!user) {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            user = JSON.parse(storedUser);
        }
    }

    // No token or user -> Login page
    if (!token || !user) {
        return <Navigate to="/login" replace />;
    }

    // Role check (Spring Boot returns role_id)
    if (Number(user.role_id) !== Number(role)) {
        return <Navigate to="/" replace />;
    }

    return children;
}