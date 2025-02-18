class product1{
    static #x=10; //associated with the class  (private static)
    
    constructor(name,price){
        this.name;
        this.price;
        console.log(product1.#x);
        // console.log(x); ReferenceError: x is not defined
        //console.log(x); direct acces not possible
    }
    set name(d){
        this.name=d;
        console.log(x);
    }
    
}
let p1 = new product1("fazle",1000);
console.log("undefiend by object access :-",p1.x);

product1.x=20;
console.log(product1.x);
// console.log(product1.#x); private access outside class not possible