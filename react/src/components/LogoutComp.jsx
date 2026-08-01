import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/authSlice";

export default function LogoutComp() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {

        // Remove JWT and user details
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        // Clear Redux state
        dispatch(logout());

        // Redirect to Home
        navigate("/", { replace: true });

    }, [dispatch, navigate]);

    return null;
}