function createTimer(time,timerId){
    console.log("Creating a new Timer with id",timerId);
    setTimeout(() => {
        console.log(`timer with id ${timerId} is done`);
        
    },time)
    console.log("Successfully created a new timer with id " , timerId);
    
}
console.log("Starting The code");
createTimer(2000,1);

createTimer(0,2);

console.log("Starting the loop");
for(let i=0;i<1000000000;i++){
    //something is going on
}

console.log("loop is done");

console.log("Last line of code is done");

function fun(c,d) {
    let m = 10;
    function gun () {
        let x=99;
        console.log("Addition of m and c is  ",m+c);
    }
    return gun;
}
const g = fun(8,10);
g(); // output:- Addition of m and c is   18

console.dir(g);





