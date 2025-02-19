function* gen(){
    
    console.log("Inside generator");
    const x = yield 10;
    const y = x+30;
    yield y;   
}

const it = gen();


/*
console.log(it.next());
console.log(it.next());
console.log(it.next(20));
*/ 

const x = it.next();
const y = it.next(x.value);

