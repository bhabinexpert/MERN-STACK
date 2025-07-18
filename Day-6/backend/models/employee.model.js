// used to stores the inforation

import { model, Schema } from "mongoose";
//defined the schema of employee:
const employeeSchema = new Schema({
    name: String,
    email: String,
    designation: String,
    department: String,
    userType: String,
    salary: Number,
    password: String,
},
{timestamps:true}) // data create vako ra update vako thahhunxa
const employeeModal = model("Employee", employeeSchema) // stores the information of the employee in the db table by creating the model

export default employeeModal