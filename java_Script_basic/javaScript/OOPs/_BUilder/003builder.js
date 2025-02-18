

class product{

    #price;
    #name;
    #description;
    
    constructor(builder){
        console.log("product Constructor called ");
        
       this.#name=builder.name;
       if(builder.price > 0 && typeof(builder.price) === "number"){
        this.#price=builder.price;
       }
       else 
            return {};
    this.#description=builder.description;
    }

    displayProduct(){
        console.log("Name :",this.#name , ",    Price : ",this.#price ,",   description : ",this.#description);
        
    }

    static get Builder(){
        class Builder{
            constructor(){
                this.name=""; //default values
                this.price=0;
                this.description="";
            }
            setName(incomingName){
                this.name=incomingName;
                return this;
            }
            setPrice(incomingPrice){
                this.price=incomingPrice;
                return this;
            }
            setDescription(incomingDescription){
                this.description=incomingDescription;
                return this;
            }
            build(){
                return new product(this);
            }
        }
        //return Builder;
        return new Builder();
    }
    
    
}

//2 (every function returns the oject(because we are returning this from these functions))


const builder =  product.Builder
                .setName("Iphone 16 pro max") //what is the return value of these  function
                .setPrice(120000)
                .setDescription("Latest Iphone")
                .build(); // calling product constructor


builder.displayProduct();







/* 
    Product.Builder() calls the static Builder getter
    why it declared as staic -  because to call by class name we have to make it static
*/ 
//multiple :- 
//1
/*
const p = new product.Builder();
console.log(p);
console.log(typeof p);
*/ 


//3
/*
const p2 =product.Builder;
p2 .setName("Iphone 16 pro max"); //what is the return value of this function
p2 .setPrice(120000);
p2 .setDescription("Latest Iphone");
const p3 =p2 .build();      
console.log(p2);
p3.displayProduct();

*/ 