import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import EmployeeList from "./components/EmployeeList";
import EmployeeAdd from "./components/EmployeeAdd";
import EmployeeDetails from "./components/EmployeeDetail";
import EmployeeEdit from "./components/EmployeeEdit";
import EmployeeDelete from "./components/EmployeeDelete";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path={`/employee/:employeeId`} element={<EmployeeDetails />} />
          <Route path={"/employee/add"} element={<EmployeeAdd />} />
          <Route path={`/employee/edit/:employeeId`} element={<EmployeeEdit />} />
          <Route path={`/employee/delete/:employeeId`} element={<EmployeeDelete/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
