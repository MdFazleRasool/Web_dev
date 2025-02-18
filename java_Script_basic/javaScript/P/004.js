console.log("start");

setTimeout( function timerCB()  {
    console.log("timer 1 done");
    
},1000) ; // timer of 6 seconds

const pr = new Promise( function exec(res, rej) {
    console.log("Executor callback triggered by promise constructor");  
    setTimeout( function prCB() {
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
    },2000);
})

pr.then(function f() {console.log("Executing f") } , function g(){console.log("Executing g")})

pr.then(function fh() {console.log("Executing h") } , function i(){console.log("Executing i")})

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
