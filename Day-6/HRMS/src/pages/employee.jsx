import { FaPlus } from "react-icons/fa";
import Button from "../components/employee/buttons";
import EmployeeCard from "../components/employee/employeeCard";
import SearchSelect from "../components/employee/searchSelect";
import employees from "../components/employee/employee"
import { useState } from "react";
import EmployeeForm from "../components/employee/employeeForm";

export default function Employee() {
  const [modelform, setModelForm] = useState(false)
  return (
    <>
      <div className="flex justify-between items-center pl-2 pr-2 text-gray-500">
        <div className="flex flex-col gap-1">
          <h3 className="text-black text-md">Employee Management</h3>
          <p className="text-black text-xs">
            Manage your organization employees
          </p>
        </div>

        <Button 
        onClick ={() => setModelForm(true)}
        icon={<FaPlus />} 
        type="button">
        Add Employee
        </Button>
      </div>
      <SearchSelect/>
        
            <EmployeeCard/>
         {modelform && (
        <div className="fixed inset-0 bg-transparent bg-opacity-10 backdrop-brightness-30 flex items-center justify-center">
          <div className="bg-white rounded-md shadow-xl w-full max-w-md relative">
            <Button
              onClick={() => setModelForm(false)}
              className="absolute top-2 right-2 text-xs bg-gray-200 px-2 py-1 rounded cursor-pointer"
            >
              ✕
            </Button>
            <EmployeeForm mode="add" />
          </div>
        </div>
      )}   
</>
  );
}