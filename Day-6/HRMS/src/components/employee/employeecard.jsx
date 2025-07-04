import { FaUser, FaEye, FaEdit, FaTrash } from "react-icons/fa";
// import employees from "../employee/employee"

export default function EmployeeCard({name, email, departments,position,status, joinDate, salary}) {
  return (
    <div className="mt-5">
      <table className="w-full text-sm text-center text-gray-700">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Employee</th>
            <th>Department</th>
            <th>Position</th>
            <th>Status</th>
            <th>Join Date</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-50 divide-y divide-gray-100">
            <td className="flex items-center gap-3 px-4 py-2 text-left">
              <FaUser className="text-gray-400" />
              <div>
                <div className="font-medium text-gray-900">{name}</div>
                <div className="text-gray-500 text-xs">{email}</div>
              </div>
            </td>
            <td>{departments}</td>
            <td>{position}</td>
            <td>
              <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">
                {status}
              </span>
            </td>
            <td>{joinDate}</td>
            <td>{salary}</td>
            <td className="flex justify-center gap-3 text-gray-600">
              <FaEye className="cursor-pointer hover:text-blue-500" />
              <FaEdit className="cursor-pointer hover:text-green-500" />
              <FaTrash className="cursor-pointer hover:text-red-500" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}