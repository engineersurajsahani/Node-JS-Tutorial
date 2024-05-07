var fs=require('fs');
var os=require('os');

var user=os.userInfo();
console.log(user);
console.log(user.username);

fs.appendFile("result.txt","Hello "+user.username+" ! ",()=>{
    console.log("File is created");
});

var notes=require("./notes");
notes.good();
notes.better();
notes.best();

var loadsh = require('loadsh');

var arr=["a","b","c","a","b","c"];

var filter=loadsh.uniq(arr);
console.log(filter);

