class product{

    name;
    price;
    category;
    description;
    rating;
    //constructor
    constructor(productName,productPrice,productcategory,productDescription,productRating){
        this.name=productName;
        this.price=productPrice;
        this.category=productcategory;
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
        console.log("product displayed");

    }
    buyProduct(){
        console.log("product purchased");
    }
}
let iphone = new product("Iphone",125000,"mobile","something",4.33);
console.log(iphone);
