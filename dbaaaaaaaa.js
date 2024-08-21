let mongoose = require('mongoose');

const main=async()=>{
    try{
        const connnection=await mongoose.connect("mongodb://127.0.0.1:27017/ABCD");
        // await StudentModel.insertMany([
        //     {
        //         name:"John",
        //         age:20,
        //         is_married:false
        //     },
        //     {
        //         name:"Jane",
        //         age:21,
        //         is_married:true
        //     },
        //     {
        //         name:"Jack",
        //         age:22,
        //         is_married:false
        //     },{
        //         name:"Jill",
        //         age:23,
        //         is_married:true
        //     }
        // ]);
        let student = new StudentModel({
            name:"abc",
            // age:20,
            // is_married:false
        });
       await student.save();
    console.log("Data Saved");
        // let data=await StudentModel.find({age:20});
        // console.log(data);
        // console.log("connected to mongodb");
        
        connnection.disconnect();

    }catch(err){
        console.log("Error connecting to mongodb");
    }
    // const connnection = mongoose.connect("mongodb://127.0.0.1:27017/");
    // console.log("connecting to mongodb");
}
main();

let studentSchema = mongoose.Schema({
    name: String,
    age: {type:Number,required:true},
    is_married: Boolean
},{
    versionKey: false
});


/**
 * Defines a Mongoose model for a student document, with properties for name, age, and marital status.
 * This model can be used to create, read, update, and delete student documents in a MongoDB database.
 */
// let StudentModel = mongoose.model("student", studentSchema);
let StudentModel=mongoose.model("student",studentSchema);