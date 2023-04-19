import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './EmployeeDetail.css'

function EmployeeDetails() {
    const EMPLOYEE_MANAGEMENT_API = "https://643f529c3dee5b763e1a29be.mockapi.io/api/";
    const { employeeId } = useParams();
    const [employee, setEmployee] = useState([]);

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

    function getEmployees() {
        window.location.href = "/";
    }

    return (
        <div>
            <h1>Employee Details</h1>
            <p><b>Id:</b> {employee.id}</p>
            <p><b>Name:</b> {employee.name}</p>
            <p><b>Email:</b> {employee.email}</p>
            <p><b>Job:</b> {employee.job}</p>
            <button type="button" onClick={getEmployees}>
                Back
            </button>&nbsp;
        </div>
    );
}

export default EmployeeDetails;