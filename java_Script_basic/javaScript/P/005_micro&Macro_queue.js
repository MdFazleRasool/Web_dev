console.log("start");


const pr1  = new Promise( function exec(res, rej) {
    console.log("Executor callback triggered by promise constructor");  
    setTimeout( function pr1CB() {
        console.log("timer of p1 done ");
    },500);
});



setTimeout( function timerCB() {
    console.log("timer 1 done");
    
},3000); // timer of 6 seconds

pr1.then(function a() {console.log("Executing a") } , function b(){console.log("Executing b")})

const pr = new Promise( function exec(res, rej) {
    console.log("Executor callback triggered by promise constructor");  
    setTimeout(  function prCB() {
        const randomNumber = Math.floor(Math.random()*100);
        console.log(randomNumber);
        if(randomNumber % 2 === 0){
            //random no is even
            res(randomNumber);
        }
        else{
            //random no is odd
            rej(randomNumber);
        }
    },4000);
}) ;


//pr.then(); // this is a registration step 
// execution step tab hoga jab promise ka state change
pr.then(function f(v) {console.log("Executing f" ,v) } , function g(v){console.log("Executing g" ,v)});
pr.then(function h(v) {console.log("Executing h" ,v) } , function i(v){console.log("Executing i" ,v)});


for(let i = 0;i<9999999;i++){}
for(let i = 0;i<9999999;i++){}


console.log("end ");

/*  output of  above code 

console.log("end ");
VM193:1 start
VM193:9 Executor callback triggered by promise constructor
VM193:33 end 
undefined
VM193:4 timer 1 done
VM193:12 95
VM193:24 Executing g
VM193:26 Executing i






*/ 
