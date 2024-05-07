const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/ems');
const db=mongoose.connection;

db.on('connected',function(){
    console.log("Connection...");
});

db.on('disconnected',function(){
    console.log("Disconnection...");
});

db.on('error',function(){
    console.log("Something went wrong!!!");
});

module.exports=db;