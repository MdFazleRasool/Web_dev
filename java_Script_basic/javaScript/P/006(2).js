
const pr  = new Promise( function exec(res, rej) {
    console.log("Executor callback triggered by promise constructor");  
    setTimeout( function pr1CB() {
        console.log("timer of p1 done ");
        res(100);
    },5000);
});

const p2=  pr.then(function f() {return "resolved" } , function i(){return "rejected"});
// p2 is a new promise 


const p3=  pr.then(function f() {console.log("Executing h") } , function i(){console.log("Executing i")});
// p3 is a new promise