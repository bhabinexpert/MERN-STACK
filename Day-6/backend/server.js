// entry file
import express from "express";
import morgan from "morgan";
import mongoose from "mongoose"; //mongoose fro db
import dotenv from "dotenv";
import cors from "cors";
import { createEmployee, deleteEmployee, getAllEmployees, getEmployeeByID, updateEmployee } from "./controllers/employee.controller.js";
dotenv.config(); //configuring the dotenv file.

const app = express();

const PORT = process.env.PORT || 8000;

// // MiddleWare:--- stops the execution here only
// app.use((req, res, next)=>{
//     console.log("This is police Chauki ")
//     next() // if the identity is is verified then it calls the next function behind it..
//     // res
//     // .status(400)
//     // .send("Chor Chor")
// })
// //For Logging informations:
app.use(morgan("dev"));
app.use(express.json()); // frontend data into
app.use(cors()); // cors middleware...

//Creating the Route:
// app.get('/damak',(req, res)=>{
//     res
//     .status(200) // sabh thik chha
//     .json({message: "Welcome to damak!!"}) // message
// })

app.get("/", (req, res) => {
  res.send("GOOD HEALTH");
});


//employee ko route!
// app.post("/employee/create", createEmployee);
// app.get('/employee/getAllEmployees', getAllEmployees)
// app.get('/employee/getAllEmployees/:id', getEmployeeByID)
// app.put('/employee/update/:id', updateEmployee)
// app.delete('/employee/delete/:id', deleteEmployee)

app.post("/employee", createEmployee);
app.get('/employee', getAllEmployees)
app.get('/employee/:id', getEmployeeByID)
app.put('/employee/:id', updateEmployee)
app.delete('/employee/:id', deleteEmployee)


// database conenction:
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database connection established");
    app.listen(PORT, () => {
      console.log("Server is running at port:", PORT);
    });
  })
  .catch((err) => {
    console.log("Database connection error; ", err);
  });
