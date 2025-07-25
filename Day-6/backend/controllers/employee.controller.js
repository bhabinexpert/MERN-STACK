import employeeModal from "../models/employee.model.js";
import bcrypt from "bcrypt";
// adding the employees in the database:
export async function createEmployee(req, res) {
  try {
    // 1) Extract the data from the frontend
    const { name, email, designation, department, userType, salary, password } =
      req.body;
    // 2) validate the data such as email, password, username and all
    if (
      !name ||
      !email ||
      !designation ||
      !department ||
      !userType ||
      !salary ||
      !password
    ) {
      return res.status(400).json({ message: "All the fields are required" });
    }

    // 3) uniqueness email check

    const isEmailExist = await employeeModal.findOne({ email });
    if (isEmailExist) {
      return res.status(400).json({ message: "This email already exist" });
    }

    // hashed the password!
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4) store the data in database and  send successfull message
    const employeeData = await employeeModal.create({
      name,
      email,
      designation,
      department,
      userType,
      salary,
      password: hashedPassword, // storing the the hashed password in the db..
    });
    return res
      .status(201)
      .json({ message: "Employee created successfully!", data: employeeData });
  } catch (error) {
    // IF ANY ERROR OCCURS IN TRY BLOCK SEND THE RESPONSE OF ERROR.
    console.log("Error:", error);
    res.status(500).json({ message: "Internal Server error" });
  }
}

// function to get all the information of employee
export async function getAllEmployees(req, res) {
  try {
    const allEmployee = await employeeModal.find();

    if (allEmployee.length === 0) {
      return res.status(404).json({ message: "No employee record found" });
    }

    res.status(200).json({ message: "Data found", data: allEmployee });
  } catch (error) {
    console.log("Error while getting the employee data:", error);
    res.status(500).json({ message: "Internal server Error" }); // showing the error in the UI..
  }
}

export async function getEmployeeByID(req, res) {
  try {
    const id = req.params.id;
    const employee = await employeeModal.findById(id);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.status(200).json({ message: "Employee data Found", data: employee });
  } catch (error) {
    console.log("Error while getting the employee by ID:", error);
    res.status(500).json({ message: "Internal server Error" }); //
  }
}

// function to update employee data:

export async function updateEmployee(req, res) {
  try {
    // kun employee ko data upgrade garne?
    // kk data update garne?
    //update garera success msg pathauney
    const id = req.params.id; // frontend bata id liiyinxa
    const updatedData = req.body;
    if (updatedData.password) {
      updatedData.password = await bcrypt.hash(updatedData.password, 10);
    }

    const updatedEmployee = await employeeModal.findByIdAndUpdate(
      id,
      updatedData,
      { new: true } //  retrieves updated data
    );

    if (!updatedEmployee) {
      return res.status(404).json({ message: "Employee data not found." });
    }

    res.status(200).json({
      message: "Employee Data Updated Successfully!",
      data: updatedEmployee,
    });
  } catch (error) {
    if (error.code === 11000 && error.keyPattern?.email) {
      return res.status(400).json({ message: "Email already exists!" });
    }
    console.log("Error while updating the employee!", error);
    res.status(500).json({ message: "Internal server Error" }); //
  }
}

// function to delete employee

export async function deleteEmployee(req, res) {
  try {
    const id = req.params.id;
    //delete the employee
    const deletedEmployee = await employeeModal.findByIdAndDelete(id);
    if (!deletedEmployee) {
      res.status(404).json({ message: " Employee not found!" });
    }
    res.status(200).json({
      message: "Employee deleted Successfully!",
      data: deletedEmployee,
    });
  } catch (error) {
    console.log("Error while deleting the employee!", error);
    res.status(500).json({ message: "Internal server Error" });
  }
}
