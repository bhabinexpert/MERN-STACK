import Button from "../employees/buttons";

export default function EmployeeForm() {
  return (
    <div className="p-7 sm:p-8">
      <div className="mb-2 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">
          Add New Employee
        </h2>
        <p className="text-sm text-gray-500">
          Fill in the employee details below
        </p>
      </div>

      <form className="space-y-2">
        <div className="flex gap-2">
          <div className="flex-1">
            <label className="block mb-0.5 text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder=""
              className="w-full px-2 py-1 border rounded-md focus:ring-1 focus:ring-blue-400 focus:outline-none"
            />
          </div>
          <div className="flex-1">
            <label className="block mb-0.5 text-gray-700">Email</label>
            <input
              type="email"
              placeholder=""
              className="w-full px-2 py-1 border rounded-md focus:ring-1 focus:ring-blue-400 focus:outline-none"
            />
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm text-gray-700 mb-1">
              Department
            </label>
            <select className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm">
              <option value="" disabled>
                Select
              </option>
              <option value="marketing">Marketing</option>
              <option value="sales">Sales</option>
              <option value="engineering">Engineering</option>
            </select>
          </div>

          <div className="flex-1">
            <label className="block text-sm text-gray-700 mb-1">
              Designation
            </label>
            <select className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm">
              <option value="" disabled>
                Select
              </option>
              <option value="senior">Senior</option>
              <option value="midlevel">Midlevel</option>
              <option value="junior">Junior</option>
              <option value="intern">Intern</option>
            </select>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm text-gray-700 mb-1">
              User Type
            </label>
            <select className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm">
              <option value="" disabled>
                Select
              </option>
              <option value="hr">HR</option>
              <option value="manager">Manager</option>
              <option value="employee">Employee</option>
            </select>
          </div>

          <div className="flex-1">
            <label className="block text-sm text-gray-700 mb-1">Salary</label>
            <input
              type="number"
              placeholder="50000"
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm"
            />
          </div>
        </div>

        <div className="flex gap-2">
          <div className="flex-1">
            <label className="block text-sm text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="*********"
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="********"
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm"
            />
          </div>
        </div>

        <div className="pt-2">
          <Button type="submit">Add Employee</Button>
        </div>
      </form>
    </div>
  );
} 