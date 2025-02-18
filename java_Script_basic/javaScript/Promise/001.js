const pr = new Promise((res, rej) =>{
    console.log("Executor callback triggered by promise constructor");  
});

console.log("Created the promise Object");
console.log(pr);
