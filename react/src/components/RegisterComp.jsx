import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterComp({ switchToLogin, closeModal }) {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        uname: "",
        password: "",
        fname: "",
        lname: "",
        email: "",
        contact: "",
        franchiseName: "",
        address: "",
        regno: ""
    });

    const [msg, setMsg] = useState("");

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:8081/users/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            });

            const result = await response.json();

            if (result === true) {
                alert("Registration Successful");
                if (closeModal) closeModal();
                navigate("/login");
            } else {
                setMsg("Registration Failed");
            }
        } catch (error) {
            console.log(error);
            setMsg("Unable to connect to server");
        }
    };

    return (
        <>
            <h3 className="text-center mb-3 text-primary">
                Franchise Registration
            </h3>

            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        name="uname"
                        value={user.uname}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label className="form-label">First Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="fname"
                            value={user.fname}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="col-md-6 mb-3">
                        <label className="form-label">Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="lname"
                            value={user.lname}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Contact Number</label>
                    <input
                        type="text"
                        className="form-control"
                        name="contact"
                        value={user.contact}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <h5 className="mt-3 mb-3">Franchise Details</h5>

                <div className="mb-3">
                    <label className="form-label">Franchise Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="franchiseName"
                        value={user.franchiseName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <textarea
                        className="form-control"
                        name="address"
                        value={user.address}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Registration Number</label>
                    <input
                        type="number"
                        className="form-control"
                        name="regno"
                        value={user.regno}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                    Register
                </button>

                {msg && (
                    <div className="alert alert-danger mt-3">
                        {msg}
                    </div>
                )}

                {switchToLogin && (
                    <div className="text-center mt-3">
                        Already have an account?
                        <button
                            type="button"
                            className="btn btn-link p-0 ms-1"
                            onClick={switchToLogin}
                        >
                            Login
                        </button>
                    </div>
                )}

            </form>
        </>
    );
}