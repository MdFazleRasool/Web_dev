function manualException(){
    const randomNumber = Math.floor(Math.random() * 100);
    if(randomNumber % 2 === 0){
        //random number is even
        return randomNumber;
    }else{
        //random number is even
        throw "Random number is odd" ;
    }
}

function caller(){
    try{
        console.log("this is risky");
        const response = manualException();
        console.log("Risky code working fine ",response);
        
        
    }catch(exception){
        console.log("Bad luck we are in catch");
        console.log(exception);
    }
}

//  throw exception , it will get rejected 
const pr  = new Promise( function exec(res, rej) {
    setTimeout( function pr1CB() {
        console.log("timer of p1 done ");
        rej(100);
    },5000);
});

const p2=  pr.then(function f(){throw 99;} ,function f(){return 99;} );

