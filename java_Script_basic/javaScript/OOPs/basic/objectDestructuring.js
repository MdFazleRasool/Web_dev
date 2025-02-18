/*
const product ={name1:"Iphone",price:125555,category:"mobile"};
const {name1,price,category}=product;
console.log(name1,price,category);

const puchasedProduct ={orderId:"xyz1234",orderdate:"11/11/24", ...product};

console.log(puchasedProduct);

const puchasedProduct1 ={orderId:"xyz1234",price:123344,orderdate:"11/11/24", ...product};
console.log(puchasedProduct1);

const puchasedProduct2 ={orderId:"xyz1234",orderdate:"11/11/24", ...product,price:123344};
console.log(puchasedProduct2);




// destructuringa and changing name 

const product1 ={name0:"Iphone",price1:125555,category1:"mobile"};

const {name0:productname,price1:productPrice,category1}=product1;

console.log(productname,productPrice,category1);
*/ 

const product2 ={name0:"Iphone",price1:125555,category1:{name:"mobile",categoryId:"xyz213"}};

const {category1:{categoryId}}=product2;
//console.log(category1); 

console.log(categoryId);
