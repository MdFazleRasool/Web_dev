const arr =[1,2,3,4,5];
// arr.map(function f() {}) // is function ko call akrne ki jimmedari map func ki hai but woto internally likha hua hai.

// H.  O.F :-  Aise functions jo kisi ar  function ko as an argument accept kar skte hai usko high order function bolte hain.

function myMap(arr,fn){
    let result=[];
    for(let i=0;i<arr.length;i++){
        result.push(fn(arr[i],i));
    }
    return result;
}

console.log(myMap(arr, function g(element){
    return element**2;
}));
