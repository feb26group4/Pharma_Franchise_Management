import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

export default function LoginComp({ switchToRegister, closeModal }) {
    const [uname, setUname] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMsg("");

        try {
            const response = await fetch("http://localhost:8081/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    uname,
                    password,
                }),
            });

            if (!response.ok) {
                if (response.status === 401) {
                    setMsg("Invalid username or password");
                } else {
                    setMsg("Login failed");
                }
                return;
            }

            const data = await response.json();

            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));

            dispatch(
                loginSuccess({
                    user: data.user,
                    token: data.token,
                })
            );

            if (closeModal) closeModal();

            switch (data.user.role_id) {
                case 1:
                    navigate("/admin");
                    break;
                case 2:
                    navigate("/warehouse");
                    break;
                case 3:
                    navigate("/franchise");
                    break;
                case 4:
                    navigate("/account");
                    break;
                case 5:
                    navigate("/user");
                    break;
                default:
                    setMsg("Unknown user role");
            }
        } catch (error) {
            console.error(error);
            setMsg("Unable to connect to server");
        }
    };

    return (
        <>
            <h3 className="text-center mb-3">Login</h3>

            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        value={uname}
                        onChange={(e) => setUname(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                    Login
                </button>

                {msg && (
                    <div className="alert alert-danger mt-3">
                        {msg}
                    </div>
                )}

                {switchToRegister && (
                    <div className="text-center mt-3">
                        Don't have an account?
                        <button
                            type="button"
                            className="btn btn-link p-0 ms-1"
                            onClick={switchToRegister}
                        >
                            Register
                        </button>
                    </div>
                )}

            </form>
        </>
    );
}