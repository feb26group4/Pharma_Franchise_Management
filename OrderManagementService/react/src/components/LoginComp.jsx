import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from '../redux/authSlice';
import { useNavigate } from "react-router-dom"; // Removed unused 'Navigate'

export default function LoginComp() {
    const [username, SetUsername] = useState("");
    const [password, SetPassword] = useState("");
    const [msg, setMsg] = useState(""); 
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const reqoptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        };

        fetch("http://localhost:9000/login", reqoptions)
            .then(resp => {
                if (resp.status === 200) {
                    return resp.json();
                } else if (resp.status === 404) {
                    setMsg("Wrong Id/password");
                    throw new Error("Invalid credentials"); // Stop the chain here!
                } else {
                    throw new Error("Something went wrong"); // Handle other server errors safely
                }
            })
            .then(data => {
                console.log(JSON.stringify(data));
                
                // Redux state modify
                dispatch(loginSuccess({ user: data.user, token: data.token }));

                // Role-based routing
                if (data.user && data.user.role === 1) {
                    navigate("/admin");
                } else if (data.user && data.user.role === 2) {
                    navigate("/user");
                } else if (data.user && data.user.role === 3){
                    navigate("/warehouse");                
                } else if (data.user &&  data.user.role === 4){
                    navigate("/account");
                } else if (data.user && data.user.role === 5){
                    navigate("/franchise");
                }
            })
            .catch(err => {
                console.error("Login process failed:", err.message);
                // The error is safely caught here, preventing an app crash
            });
    };

    return (
        <>
            <h1>Login Form</h1>
            <form onSubmit={handleSubmit}> {/* Better practice: put onSubmit on the form itself */}
                Enter Username : 
                <input type="text" name="username" value={username} onChange={(e) => { SetUsername(e.target.value) }} /><br />
                
                {/* Changed type to "password" so it's hidden while typing */}
                Enter Password : 
                <input type="password" name="password" value={password} onChange={(e) => { SetPassword(e.target.value) }} /> <br />
                
                <input type="submit" value="LOGIN" />
            </form>
            <p>{msg}</p>
        </>
    );
}