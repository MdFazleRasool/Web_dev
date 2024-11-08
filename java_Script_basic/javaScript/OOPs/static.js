

class product{
    static x=10; //associated with the class 
    constructor(name,price){
        this.name;
        this.price;
        console.log(product.x);
        //console.log(x); direct acces not possible
    }
    
}
let p1 = new product("fazle",1000);
console.log("undefiend by object access :-",p1.x);
console.log(product.x);
product.x=20;
console.log(product.x);




