// entry file
import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose'; //mongoose fro db
import dotenv from 'dotenv';
dotenv.config(); //configuring the dotenv file.


const app = express();

const PORT  = process.env.PORT;

// MiddleWare:--- stops the execution here only
app.use((req, res, next)=>{
    console.log("This is police Chauki ")
    next() // if the identity is is verified then it calls the next function behind it..
    // res
    // .status(400)
    // .send("Chor Chor")
})
//For Logging informations:
app.use(morgan("dev"));




//Creating the Route:
app.get('/damak',(req, res)=>{
    res
    .status(200) // sabh thik chha 
    .json({message: "Welcome to damak!!"}) // message
})

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Database connection established")
}).catch((err)=>{
    console.log("Database connection error; ", err)
})

app.listen(PORT, ()=>{
    console.log("Server is running at port: ", PORT)
})
