/*
In js functions are first class citizen
In JS functions can be returned from a function.
function can be  passsed as an argument to another function

*/

/*
const s1 = "hello \nworld";

const s2 = 'hello \t world';
const s3 = 'hello';

console.log(s1,s2,s3);

const s4  = "my name \" is fazle rasool  \" . and i'm in third year btech";
console.log(s4);

const s5  = `my name \` is fazle rasool  \` . and i'm in third year btech`;

console.log(s5);



const firstname = "Fazle";
const secondname = "Rasool";

const s6  = `my name ${firstname}\` ${secondname} \` `
console.log(s6);
*/

//inbult functions

/*
console.log(firstname + secondname);

const fullname = firstname.concat(" ",secondname);
console.log(fullname);


const x1= "abc";
const x2 = "def";
const x3 = "ghi";

console.log(x1,x2,x3);
let result = "";
result=result+x1+x2+x3;
console.log(result);
*/


function something(){
    return function x(){
        return 10;
    }
}

function anotherfunction(f1){
    f1();
    console.log("called f1 here ");
    
}

function hello(){
    console.log("hello");
    
}

anotherfunction(hello);