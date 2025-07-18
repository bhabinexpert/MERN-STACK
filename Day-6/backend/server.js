// entry file
import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose'; //mongoose fro db


const app = express();

const PORT  = 8000;

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

mongoose.connect("mongodb+srv://bhabin:bbbb1234@cluster0.2rusqlf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("Database connection established")
}).catch((err)=>{
    console.log("Database connection error; ", err)
})

app.listen(PORT, ()=>{
    console.log("Server is running at port: ", PORT)
})
