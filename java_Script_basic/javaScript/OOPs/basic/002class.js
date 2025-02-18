class product{

    #name;
    #price;
    #category;
    description;
    rating;
    //constructor
    constructor(productName,productPrice,productcategory,productDescription,productRating){
        this.#name=productName;
        this.#price=productPrice;
        this.#category=productcategory;
        this.description=productDescription;
        this.rating=productRating;
    }

    addToCart(){
        console.log("product added to the cart");
        
    }
    removeFromCart(){
        console.log("product removed to the cart");

    }
    displayProduct(){
        console.log("product displayed :- " ,this.#name,this.#category,this.#price,this.description,this.rating);

    }
    buyProduct(){
        console.log("product purchased");
    }

    set name(d){
        if(d.length === 0){
            console.log("invalid name1");
            return;
        }
        this.#name=d;
    }
    get name(){
        console.log(this.#name);   
    }
    set description(d){
        if(d.length === 0){
            console.log("invalid description");
            return;
        }
        this.description=d; 
    }
    get description(){
        console.log(this.description);
        
    }
    setprice(d){
        if(d < 0){
            console.log("invalid price");
            return;
        }
        this.#price=d;
    }
    getprice(){
        console.log(this.#price);
    }
}
let iphone = new product("Iphone 13",125000,"mobile","something",4.33);
/*console.log(iphone);
iphone.name="iphone 12";
//iphone.#name="iphone 16 pro max";
console.log(iphone.name);
iphone.displayProduct();
*/ 
iphone.name="iphone 17";
console.log(iphone.name);
iphone.displayProduct();
console.log();
iphone.setprice(100000);
iphone.getprice();
iphone.displayProduct();