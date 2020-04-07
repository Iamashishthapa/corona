"use strict";

let a = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("Done");
    },4000)
})
.then(function(val){
    console.log(val);
})
console.log(a);
console.log("Asynchronous");