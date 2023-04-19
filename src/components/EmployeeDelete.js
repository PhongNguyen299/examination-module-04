import axios from "axios";
import './EmployeeDelete.css'

const EmployeeDelete = (props) => {
    const EMPLOYEE_MANAGEMENT_API = "https://643f529c3dee5b763e1a29be.mockapi.io/api/";

    function removeEmployee() {
    console.log(props.id)
        if (props.id) {
            axios
                .delete(`${EMPLOYEE_MANAGEMENT_API}/employees/${props.id}`)
                .then(res => {
                    alert(
                        `Remove employee ${JSON.stringify(
                            res.data
                        )} successfully!!!`
                    );
                })
                .catch(err => {
                    throw err;
                });
        }
    }

    return(
        <div>
            <button className={"button-delete"} type="button" onClick={removeEmployee}>
                Remove
            </button>
        </div>
    )
}
export default EmployeeDelete;