const mongoose=require("mongoose");

const studentSchema=mongoose.Schema({
    name:{type:String ,required:true},
    age:Number,
    is_married:Boolean
})

//collection + schema makes model
//it is constructor function iski help help se directly data create
const StudentModel=mongoose.model("student",studentSchema);

module.exports={ StudentModel }

