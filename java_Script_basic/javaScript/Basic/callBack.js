/*
function h(x,fn){
    // h --> is a hof
    //fn --> call back
    console.log(x*x);
    fn();
    console.log("higher order function fn ");
    
}
h(10,function fn(){
    console.log("done with a callback");
    
})


function high(x,fn){
    // h --> is a hof
    //fn --> call back
    console.log(x*x);
    fn(x*x);
}

let x = function highorderfunction(n){
    console.log("squared value is",n);
    
}

high(10,x);


//Asynchronous code  :- this is not a native js feature (not present in documenetion also thats why js doesn't wait for the code to execute )
console.log("start");
setTimeout(function f(){
    console.log("timer done ");
},3000);
console.log("end");

 

console.log("start");
setTimeout(function f(){
    console.log("timer done 1");
},500);
setTimeout(function f(){
    console.log("timer done 2");
},0);

console.log("end");
for (let i = 0; i < 999999999; i++) {
    
}
for (let i = 0; i < 9999999990; i++) {
    
}
console.log("2 for loop ended");
*/



const product = {name : "Iphone 15 pro max",price:25000};
a= Object.keys(product);
product.company = "apple"
a= Object.keys(product); // we have to it again
for(let i=0;i<a.length;i++){
    Object.defineProperty(product,a[i],{configurable:false,writable:false})
}
console.log(delete product.company);


function customSeal(product) {
    let keys = Object.keys(product);
    for (let i = 0; i < keys.length; i++) {
        Object.defineProperty(product,keys[i],{configurable:false,writable:false});
    }
    Object.preventExtensions(product);
}