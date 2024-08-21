
const express=require("express");
const studentRouter=express.Router();
const{ StudentModel } =require("../models/student")

//url will be /student/add as it has become router
studentRouter.post("/add",async(req,res)=>{
    const payload=req.body
    try{
      //  StudentModel.insertMany can be used
      const student=new StudentModel(payload);
       await student.save()
      res.send("Student info saved")
    }
    catch(err){
       console.log(err);
        res.send("something went wrong");
    }
})

//url will /student/fin
studentRouter.get("/fin", async (req,res)=>{
    try{
        let data= await StudentModel.find()
        res.send(data);
    }
    catch(err){
        res.send("somethingwentwrong");
    }
})


studentRouter.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const result = await StudentModel.findByIdAndDelete(id);
        if (result) {
            res.send("Student deleted");
        } else {
            res.status(404).send("Student not found");
        }
    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
});


module.exports={ studentRouter }

