import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, role }){
    //in login state -> user, token , isAuthenticated
    const loginstate = useSelector(state => state.auth)

    //checking if ant user has logged in
    if(!loginstate.isAuthenticated){
        return <Navigate to ="/login" />
    }

    //verifying the role of the logged in user
    if(loginstate.user.role !== role){
        return <Navigate to="/unauthorised" />
    }

    return children;
}