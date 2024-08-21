const mongoose=require("mongoose")
//url ke andar query jab us karta start with ? seprate query by and
//mongodb+srv://ujjwal2478:altufaltu598@cluster0.kvhqw.mongodb.net/infodb?retryWrites=true&w=majority&appName=Cluster0
require('dotenv').config()
const connection=mongoose.connect(process.env.MONGO_URL);

module.exports={connection};