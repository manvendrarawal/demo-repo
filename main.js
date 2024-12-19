// const fs = require("fs");


// setTimeout(function(){
//     console.log("Hello from the setTimeout function")
// },5000)

// // fs.readFile("a.txt","utf-8",function(err,data){
// //     data = data + "Hello from manvenvdra from code";
// //     fs.writeFile();
// // })




// console.log("Logging at the end");



//Promises = just syntactical sugar  readable way to write async functions



// //Async are just wrapper around already made async functions
// const fs = require("fs");

// function readandthenwritetofile(cb){
//   fs.readFile("a1.txt","utf-8",function(err,data){
//     data =data +"Manvendra Singh ";
//     fs.writeFile("a.txt",function(){
//         cb();
//     })
//   })  
// }


// readandthenwritetofile(function(){
//     console.log("Copyright has been put");
// })


//Promises

const d  = new Date();
console.log(d.getHours());

function myownsettimeout(callbackk,duration){
    setTimeout(callbackk,duration);
}


//Will not accept the callback
function promisifiedmyownsettimeout(duration){
   const p = new Promise(function(resolve){
    setTimeout(function(){
        resolve();
    },duration);

   });
   return p;
}



//async await syntax +> callback hell

const answer =promisifiedmyownsettimeout(1000);
console.log(answer);
answer.then(function(){
    console.log("timeout is done");
})


//Call a promise function
