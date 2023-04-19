import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import EmployeeItem from "./EmployeeItem";
import './EmployeeList.css'

const EmployeeList = () => {
    const EMPLOYEE_MANAGEMENT_API = "https://643f529c3dee5b763e1a29be.mockapi.io/api/";
    const {employeeId} = useParams();
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios
            .get(`${EMPLOYEE_MANAGEMENT_API}/employees`)
            .then(res => {
                setEmployees(res.data);
            })
            .catch(err => {
                throw err;
            })
    }, [employees, employeeId]);


    const handleCreate = () => {
        window.location.href = "/employee/add"
    }

    return (
        <div className="employee-list-container">
            <h1 className="employee-list-title">EMPLOYEE MANAGEMENT</h1>
            <div className="employee-list-actions">
                    <button className="employee-list-button" type="button" onClick={handleCreate}>Create New Employee</button>
            </div>
            <EmployeeItem items={employees} />
        </div>
    )
}
export default EmployeeList;