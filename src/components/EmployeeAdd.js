import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './EmployeeAdd.css'

function EmployeeAdd(props) {
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
            .post(`${EMPLOYEE_MANAGEMENT_API}/employees`, employee)
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

    return (
        <div>
            <h1>Employee Add</h1>
            <form>
                <div>
                    <label>Name</label>
                    <input name="name" value={employee.name || ""} onChange={handleChange} />
                </div>
                <div>
                    <label>Email</label>
                    <input name="email" value={employee.email || ""} onChange={handleChange} />
                </div>
                <div>
                    <label>Job</label>
                    <input name="job" value={employee.job || ""} onChange={handleChange} />
                </div>
                <button type="button" onClick={handleSubmit}>
                    Add new employee
                </button>
                <button type="button" onClick={props.onCancel}>
                    Cancel
                </button>
            </form>
        </div>
    );
}

export default EmployeeAdd;