import EmployeeDelete from "./EmployeeDelete";
import './EmployeeItem.css'
import {Link} from "react-router-dom";

const EmployeeItem = (props) =>{
    return (
        <div className="employee-table-container">
            <table className="employee-table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Job</th>
                    <th colSpan={3}>Action</th>
                </tr>
                </thead>
                <tbody>
                {props.items.map(employee => (
                    <tr key={employee.id}>
                        <td>{employee.id} </td>
                        <td>{employee.name} </td>
                        <td>{employee.email} </td>
                        <td>{employee.job} </td>
                        <td>
                            <Link className="employee-table-button" to={`/employee/${employee.id}`}>Detail</Link>
                        </td>
                        <td>
                            <Link className="employee-table-button" to={`/employee/edit/${employee.id}`}>Edit</Link>
                        </td>
                        <td>
                            <EmployeeDelete id={employee.id} />
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>


    )
}

export default EmployeeItem;