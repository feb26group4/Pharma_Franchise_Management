import React, { useEffect, useState } from "react";
import axios from "axios";

function StudentComponent() {

    const API_URL = "https://localhost:7274/api/Student";

    const [students, setStudents] = useState([]);

    const [student, setStudent] = useState({
        id: 0,
        name: "",
        gender: "",
        adress: "",
        marks: ""
    });

    useEffect(() => {
        loadStudents();
    }, []);

    const loadStudents = () => {
        axios.get(API_URL)
            .then((res) => {
                setStudents(res.data);
            })
            .catch((err) => console.log(err));
    };

    const handleChange = (e) => {
        setStudent({
            ...student,
            [e.target.name]: e.target.value
        });
    };

    const saveStudent = () => {

        axios.post(API_URL, student)
            .then(() => {
                alert("Student Added Successfully");
                clearForm();
                loadStudents();
            })
            .catch((err) => console.log(err));
    };

    const updateStudent = () => {

        axios.put(API_URL, student)
            .then(() => {
                alert("Student Updated Successfully");
                clearForm();
                loadStudents();
            })
            .catch((err) => console.log(err));
    };

    const deleteStudent = (id) => {

        if (window.confirm("Delete this student?")) {

            axios.delete(`${API_URL}?id=${id}`)
                .then(() => {
                    alert("Student Deleted Successfully");
                    loadStudents();
                })
                .catch((err) => console.log(err));
        }
    };

    const editStudent = (stud) => {
        setStudent(stud);
    };

    const clearForm = () => {
        setStudent({
            id: 0,
            name: "",
            gender: "",
            adress: "",
            marks: "",
        });
    };

    return (
        <div className="container mt-4">

            <h2>Student CRUD Operations</h2>

            <div className="card p-3 mb-4">

                <div className="mb-2">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={student.name}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>

                <div className="mb-2">
                    <label>Gender</label>
                    <input
                        type="text"
                        name="gender"
                        value={student.gender}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>

                <div className="mb-2">
                    <label>Address</label>
                    <input
                        type="text"
                        name="adress"
                        value={student.adress}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>

                <div className="mb-2">
                    <label>Marks</label>
                    <input
                        type="text"
                        name="marks"
                        value={student.marks}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>

                {
                    student.id === 0 ?

                        <button
                            className="btn btn-success"
                            onClick={saveStudent}>
                            Save
                        </button>

                        :

                        <button
                            className="btn btn-primary"
                            onClick={updateStudent}>
                            Update
                        </button>
                }

                <button
                    className="btn btn-secondary mt-2"
                    onClick={clearForm}>
                    Clear
                </button>

            </div>

            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Address</th>
                        <th>Marks</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        students.map((stud) => (
                            <tr key={stud.id}>
                                <td>{stud.id}</td>
                                <td>{stud.name}</td>
                                <td>{stud.gender}</td>
                                <td>{stud.adress}</td>
                                <td>{stud.marks}</td>
                                <td>

                                    <button
                                        className="btn btn-warning btn-sm me-2"
                                        onClick={() => editStudent(stud)}>
                                        Edit
                                    </button>

                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => deleteStudent(stud.id)}>
                                        Delete
                                    </button>

                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>

        </div>
    );
}

export default StudentComponent;
