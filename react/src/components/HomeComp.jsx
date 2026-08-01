import { useState } from "react";
import LoginComp from "./LoginComp";
import RegisterComp from "./RegisterComp";

export default function HomeComp() {
    const [activeModal, setActiveModal] = useState(null); // "login" | "register" | null

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
                <div className="container-fluid">
                    <span className="navbar-brand">MediSync</span>

                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <button
                                className="btn btn-link nav-link"
                                onClick={() => setActiveModal("login")}
                            >
                                Login
                            </button>
                        </li>

                        <li className="nav-item">
                            <button
                                className="btn btn-link nav-link"
                                onClick={() => setActiveModal("register")}
                            >
                                Register
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="container mt-4">
                <h1>Welcome to Home Page</h1>
                <p>About us - Info about franchise </p>
                <p>Want to join us? - register link </p>
            </div>

            {/* OVERLAY */}
            {activeModal && (
                <div
                    className="d-flex justify-content-center align-items-center"
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        background: "rgba(0,0,0,0.5)",
                        zIndex: 1050
                    }}
                    onClick={() => setActiveModal(null)}
                >
                    <div
                        style={{
                            background: "#fff",
                            borderRadius: "12px",
                            maxWidth: "450px",
                            width: "90%",
                            maxHeight: "85vh",
                            overflowY: "auto",
                            padding: "1.5rem",
                            position: "relative",
                            boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="btn-close"
                            style={{ position: "absolute", top: "1rem", right: "1rem" }}
                            onClick={() => setActiveModal(null)}
                        ></button>

                        {activeModal === "login" && (
                            <LoginComp
                                switchToRegister={() => setActiveModal("register")}
                                closeModal={() => setActiveModal(null)}
                            />
                        )}

                        {activeModal === "register" && (
                            <RegisterComp
                                switchToLogin={() => setActiveModal("login")}
                                closeModal={() => setActiveModal(null)}
                            />
                        )}
                    </div>
                </div>
            )}
        </>
    );
}