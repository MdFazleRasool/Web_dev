/* 
function h(x,fn){
    //console.log(x*x);
    //fn();
    fn(x*x);
}
// h(10,function(){
//     console.log("done with the call backs");
    
// })

h(10,exec)
function exec(n){
    console.log("square value is ",n);
    
}

*/

//Async pice of code (next 5 lines of code of setTimeout)
setTimeout("start");

setTimeout(function f(){
    console.log("timer don");
    
},2000);

console.log("set timeout ended");



// sync piece of code (next 3 lines)
console.log("start for loop ");
for (let i = 0; i < 999999999; i++) {    
}
console.log("for loop  ended");



// sync piece of code (next 3 lines)
console.log("start for loop ");
setTimeout(function f(){
    console.log("setTimeout 1 done");
    
},3000)
setTimeout(function f(){
    console.log("setTimeout 2 done");
    
},)
for (let i = 0; i < 999999999; i++) {    
}
console.log("for loop  ended");