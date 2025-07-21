import employeeModal from "../models/employee.model.js";

export async function  createEmployee(req, res) {
  try {
    // 1) Extract the data from the frontend
    const {name, email, designation, department, userType, salary, password} =
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

    const isEmailExist = await employeeModal.findOne({email});
    if (isEmailExist) {
      return res.staus(400).json({ message: "This email already exist" });
    }

    // 4) store the data in database and  send successfull message
    const emloyeeData = await employeeModal.create({
      name,
      email,
      designation,
      department,
      userType,
      salary,
      password,
    });
    return res.staus(201).json({ message: "Employee created successfully!" });
  } catch (error) {
    // IF ANY ERROR OCCURS IN TRY BLOCK SEND THE RESPONSE OF ERROR.
    console.log("Error:", error);
    res.status(500).json({ message: "Internal Server error" });
  }
}
