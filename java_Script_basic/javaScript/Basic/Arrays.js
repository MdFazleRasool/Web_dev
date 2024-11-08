let arr1 = [];  //empty array

let arr2 = ["faz",true,10,-1];
/*
console.log(arr1);
console.log(arr2);

arr1.push(6,7);
console.log(arr1);
arr1.pop();
console.log(arr1);

const aa = arr1.shift();
console.log(aa);

console.log(arr1);

arr1.unshift(1,2);
console.log(arr1);
*/ 
/*
arr1.push(1,2);
let arr3 = arr1.concat(arr2);
console.log(arr1,arr2,arr3);

let s = arr3.join("@");
console.log(s);
console.log(typeof s);

console.log(arr3.reverse());

console.log(arr3.indexOf(2));
console.log(arr3.indexOf(70));
*/ 
/*
let arr4 = [1,2,3,4,5];
console.log(arr4.slice(2,5));


arr4.splice(2,0,11);
console.log(arr4);

arr4.splice(3,2,12);
console.log(arr4);

*/ 

//Objects 

let obj1 = {id : 101 , name : " fazle" , salary : 999999};
console.log(obj1);

let emp1 = new Object();
console.log(emp1);

emp1.id=102;
emp1.name="sam";
console.log(emp1);

function Emp (i,n,s){
    this.id=i;
    this.name=n;
    this.salary=s;
}
const e =new  Emp(103,"nfarsool",99999999);
console.log(e);

console.log(emp1.id);
console.log(emp1['name']);
emp1.salary=10;
console.log(emp1);

emp1['name'] = "sam-";
console.log(emp1);

delete emp1.id;
console.log(emp1);

