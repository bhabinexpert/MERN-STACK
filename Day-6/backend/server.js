// entry file
import express from 'express';
import morgan from 'morgan';


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

app.listen(PORT, ()=>{
    console.log("Server is running at port: ", PORT)
})
