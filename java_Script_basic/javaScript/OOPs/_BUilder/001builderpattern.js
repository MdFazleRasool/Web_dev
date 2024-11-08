class product{
     
    constructor(builder){
       this.name=builder.name;
       if(builder.price > 0 && typeof(builder.price) === "number"){
        this.price=builder.price;
       }
       else 
        return {};
       this.price=builder.price;
       this.category=builder.category;
       this.description=builder.description;
       this.rating=builder.rating;
    }
    getprice(){
        return this.price;
    }
    setprice(p){
        if(p > 0)
            this.price=p;
        else    
            console.log("invalid price");    
    }
}
const p = new product({
    name:"Iphone 16",
    price:12676,
    category:"Electronics",
    description:"Apple Iphone " ,
    rating : 4.5

});
console.log(p);
console.log(typeof p);

