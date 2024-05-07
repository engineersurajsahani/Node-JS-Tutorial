console.log("Node JS tutorial");

function add(a,b){
    return a+b;
}

var sub=function(a,b){
    return a-b;
}

var mul=(a,b)=>{return a*b};

var div=(a,b)=>a/b;

var result=add(4,5);

console.log(result);

(function(){
    console.log("Function...");
})();

function callback(){
    console.log("Callback Function Executed!!!");
}

function hello(callback){
    console.log("Hello");
    callback();
}

hello(callback);

function data(suraj){
    console.log("Data Function...");
    suraj();
}

data(function(){
    console.log("Function....");
})

data(()=>{console.log("Function.");})