const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('I am Suraj Sahani');
})

app.get('/java',function(req,res){
    res.send("Java Programming");
})

app.get('/python',function(req,res){
    res.send("Python Programming");
})

app.get('/c',function(req,res){
    res.send("C Programming");
})

app.get('/cpp',function(req,res){
    res.send("C++ Programming");
})

app.get('/me',function(req,res){
    var me={
        id:1,
        name:"Suraj Sahani",
        salary:"60000"
    }
    res.send(me);
})

app.listen(3000,function(){
    console.log("Server started...");
})