import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './EmployeeEdit.css'
function EmployeeEdit() {
    const EMPLOYEE_MANAGEMENT_API = "https://643f529c3dee5b763e1a29be.mockapi.io/api/";
    const { employeeId } = useParams();
    const isCreate = !employeeId;
    const [employee, setEmployee] = useState({});

    useEffect(() => {
        if (employeeId) {
            axios
                .get(`${EMPLOYEE_MANAGEMENT_API}/employees/${employeeId}`)
                .then(res => {
                    setEmployee(res.data);
                })
                .catch(err => {
                    throw err;
                });
        }
    }, [employeeId]);

    function handleChange(event) {
        setEmployee({
            ...employee,
            [event.target.name]: event.target.value
        });
    }

    function handleSubmit() {
        axios
            .put(`${EMPLOYEE_MANAGEMENT_API}/employees/${employeeId}`, employee)
            .then(res => {
                alert(
                    `${isCreate ? "Create" : "Edit"} employee ${JSON.stringify(
                        res.data
                    )} successfully!!!`
                );
                window.location.href = "/";
            })
            .catch(err => {
                throw err;
            });
    }

    function getEmployees() {
        window.location.href = "/";
    }

    return (
        <div className="employee-edit-container">
            <h1 className="employee-edit-title">Employee Edit</h1>
            <form className="employee-edit-form">
                <div className="employee-edit-input-container">
                    <label className="employee-edit-label">Id</label>
                    <input readOnly className="employee-edit-input" name="id" value={employee.id || ""} onChange={handleChange} />
                </div>
                <div className="employee-edit-input-container">
                    <label className="employee-edit-label">Name</label>
                    <input className="employee-edit-input" name="name" value={employee.name || ""} onChange={handleChange} />
                </div>
                <div className="employee-edit-input-container">
                    <label className="employee-edit-label">Email</label>
                    <input className="employee-edit-input" name="email" value={employee.email || ""} onChange={handleChange} />
                </div>
                <div className="employee-edit-input-container">
                    <label className="employee-edit-label">Job</label>
                    <input className="employee-edit-input" name="job" value={employee.job || ""} onChange={handleChange} />
                </div>
                <div className="employee-edit-button-container">
                    <button type="button" className="employee-edit-back-button" onClick={getEmployees}>
                        Back
                    </button>&nbsp;
                    <button type="button" className="employee-edit-submit-button" onClick={handleSubmit}>
                        Edit
                    </button>
                </div>
            </form>
        </div>

    );
}

export default EmployeeEdit;