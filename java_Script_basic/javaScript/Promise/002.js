//Resolver And Rejector part 1

const pr = new Promise( function exec(res, rej) {
    console.log("Executor callback triggered by promise constructor");  
    const randomNumber = Math.floor(Math.random()*100);
    console.log(randomNumber);
    if(randomNumber % 2 === 0){
        //random no is even
        res();
    }
    else{
        //random no is odd
        rej();
    }


});

console.log("Created the promise Object");
console.log(pr);

// passing arguments in resolver() and rejector
const pr1 = new Promise( function exec(res, rej) {
    console.log("Executor callback triggered by promise constructor");  
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


});

console.log("Created the promise Object");
console.log(pr1);