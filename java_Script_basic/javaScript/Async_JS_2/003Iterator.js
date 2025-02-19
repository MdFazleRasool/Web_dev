function* myGenerator(){
    console.log("Inside Generator");
    yield 100;
    yield 99;
    yield 85;
    yield 66;
    yield -1;
    
}

/*
const i = myGenerator();
console.log(i.next());
console.log("out ");
console.log(i.next());
console.log("out ");
console.log(i.next());
*/ 


function* gen(arr){
    for(let i=0;i<arr.length;i++){
        console.log("Inside generator");
        yield arr[i];
    }
}

const it = gen([1,2,3,4]);
console.log(it.next());
console.log("out ");
console.log(it.next());
console.log("out ");
console.log(it.next());