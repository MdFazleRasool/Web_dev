function product(n,p,d) {
    this.name=n;
    this.price=p;
    this.description=d;

    this.displayProduct= function () {
        console.log("Name :" ,this.name , "Price: " , this.price , "description : ", this.description);
    }
}
let iphone = new product("Iphone 12 ",900,"apple phone for sale ");
iphone.displayProduct();