import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function ViewApplications() {

    const [applications, setApplications] = useState([]);

    const token = useSelector((state) => state.auth.token);

    useEffect(() => {

        fetch("http://localhost:8081/users/applications", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then(response => {

            if (!response.ok) {
                throw new Error("Failed to fetch applications");
            }

            return response.json();
        })
        .then(data => {
            console.log("Applications:", data);
            setApplications(data);
        })
        .catch(error => {
            console.error("Error:", error);
        });

    }, [token]);


    const handleApprove = async (fid) => {

        try {

            const response = await fetch(
                `http://localhost:8081/users/applications/${fid}/approve`,
                {
                    method: "PUT",
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                }
            );

            if (response.ok) {

                alert("Application approved");

                // Remove approved application from UI
                setApplications(
                    applications.filter(app => app.fid !== fid)
                );
            }

        } catch (error) {
            console.error(error);
        }
    };


    const handleReject = async (fid) => {

        try {

            const response = await fetch(
                `http://localhost:8081/users/applications/${fid}/reject`,
                {
                    method: "PUT",
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                }
            );

            if (response.ok) {

                alert("Application rejected");

                // Remove rejected application from UI
                setApplications(
                    applications.filter(app => app.fid !== fid)
                );
            }

        } catch (error) {
            console.error(error);
        }
    };


    return (

        <div className="container mt-4">

            <h2 className="text-center mb-4">
                Franchise Applications
            </h2>

            <table className="table table-bordered table-striped">

                <thead>

                    <tr>
                        <th>Username</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Franchise Name</th>
                        <th>Address</th>
                        <th>Registration Number</th>
                        <th>Actions</th>
                    </tr>

                </thead>

                <tbody>

                    {applications.length === 0 ? (

                        <tr>
                            <td colSpan="8" className="text-center">
                                No pending applications
                            </td>
                        </tr>

                    ) : (

                        applications.map((app) => (

                            <tr key={app.fid}>

                                <td>{app.uname}</td>

                                <td>
                                    {app.fname} {app.lname}
                                </td>

                                <td>{app.email}</td>

                                <td>{app.contact}</td>

                                <td>{app.franchiseName}</td>

                                <td>{app.address}</td>

                                <td>{app.regno}</td>

                                <td>

                                    <button
                                        className="btn btn-success btn-sm me-2"
                                        onClick={() => handleApprove(app.fid)}
                                    >
                                        Approve
                                    </button>

                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => handleReject(app.fid)}
                                    >
                                        Reject
                                    </button>

                                </td>

                            </tr>

                        ))

                    )}

                </tbody>

            </table>

        </div>
    );
}