const mongoose=require('mongoose');

const employeeSchema={
    id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    }
};

const Employee=new mongoose.model("Employee",employeeSchema);
module.exports=Employee;