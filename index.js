const express=require("express");
const connection=require("./config/db")
const app=express();
app.use(express.json());
require('dotenv').config()
const { StudentModel } =require('./models/student')
const { studentRouter }=require('./routes/student.router')


app.get("/",(req,res)=>{
    res.send("This is Home page")
})

//next se middleware ki execution age bara skte
app.get("*",(req,res,next)=>{
    //res.send({message:"INVALID URL",status:"ERROR"})
    let err=new Error("INVALID URL");  //error object
    err.statusCode=404;
    next(err);   //error handler wala middlware call only baki sare middlware skip
})

//aapp.use is middleware and it is global error handler
app.use((err,req,res,next)=>{
    res.status(err.statusCode).json({
        message:err.message

    })
})

//jaise hi student call karu vaise hi student router call
app.use("/students",studentRouter);


app.listen(process.env.PORT,async ()=>{
    try{
        //i want connection to eastablish jaise hi server start
       await connection;
        console.log("connection is established")
    } 
    catch(err){
        console.log("err to connecting db")
    }
    console.log(`server is started on some port ${process.env.PORT}`)
})