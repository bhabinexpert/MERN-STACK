import { FaPlus } from "react-icons/fa";
import Button from "../components/employee/buttons";
import EmployeeCard from "../components/employee/employeeCard";
import SearchSelect from "../components/employee/searchSelect";
import employees from "../components/employee/employee"

export default function Employee() {
  return (
    <>
      <div className="flex justify-between items-center pl-2 pr-2 text-gray-500">
        <div className="flex flex-col gap-1">
          <h3 className="text-black text-md">Employee Management</h3>
          <p className="text-black text-xs">
            Manage your organization employees
          </p>
        </div>

        <Button icon={<FaPlus />} type="button">
          Add Employee
        </Button>
      </div>
      <SearchSelect/>
        {employees.map(({name, email, departments, position, status, joinDate, salary})=>{ //destructuring the data from employess
          // let [ name, email, departments, position, status, joinDate, salary] = items;
          return(
            <EmployeeCard
            name = {name}
            email = {email}
            departments = {departments}
            position = {position}
            status = {status}
            joinDate={joinDate}
            salary={salary}      
            
            />

          )
        })}
      
      
      

      

     
    </>
  );
}