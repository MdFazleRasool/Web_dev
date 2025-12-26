// 29th june (26 dec)

let a = null ;
let b = "mf" ;

let c = a && b;
console.log(c);

let d = true && b;
console.log(d);

d = b && true;
console.log(d);

// last wala as output aayega why 
a = {name : { firstName : {surName : "MFRasool"}}}

console.log(a && a.name && a.name.firstName &&a.name.firstName.surName);


console.log(a || a.name || a.name.firstName  || a.name.firstName.surName);

