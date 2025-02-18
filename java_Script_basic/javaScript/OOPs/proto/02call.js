// Usage of call 

const obj = {
    name:"fazle",
    greet: () => {
        console.log("hello my name is ",this.name)
    }
}
undefined
obj.greet();

const newObj = {name:"fazle rasool"}
obj.greet.call(newObj) // undefined
obj.greet.call(obj) //undefined
// name :-  will come undefined due to use of the arrow function




const obj1 = {
    name:"fazle",
    greet: function ()  {
        console.log("hello my name is ",this.name)
    }
}
const newObj1 = {name : "mfrasool"}
obj1.greet.call(newObj1)
obj1.greet()





const obj2 = {
    name:"fazle",
    greet: function (welcomeMessage)  {
        console.log("hello my name is ",this.name,welcomeMessage)
    }
}




obj2.greet("How Are you ");
const newObj2 = {name : "mfrasool"}
obj2.greet.call(newObj2)
obj2.greet.call(newObj2,"How are you ");
// these are the usage of call function



const obj3 = {
    name:"fazle",
    greet: function (welcomeMessage,prompt)  {
        console.log("hello my name is ",this.name,welcomeMessage,prompt)
    }
}

obj3.greet("How are you ","How can i help you")

obj3.greet.call(newObj,"How are you ","How can i help you")

obj.greet.call() //lexically khojega


//Usage of Apply function

obj.greet.apply(newObj,["How are you ","How can i help you"])


// INteresting case 
var name = "fazle"
const obj4 = {
    greet: function ()  {
        console.log("hello my name is ",this.name)
    }
}
obj4.greet.call()


// Bind 

const obj5 = {
    name:"fazle",
    greet: function (welcomeMessage,prompt)  {
        console.log("hello my name is ",this.name,welcomeMessage,prompt)
    }
}
const newObj5 = {name :"mfrasool"};
f=obj5.greet.bind(newObj5);
f("hello","hii")


obj5.greet()
f()


// in case of arrow function it get solved lexically , 
// so to get prevent from it 
// type 1 :-  use arrow function inside a normal function
let obj6 = {
    name : "Mfazle",
    greet: function ()  {
        const arr = () => {
            console.log("hello my name is ",this.name)
        }
        arr();
    }
}

// type 2 :- 
let obj7 = {
    name : "Mfazle",
    greet: function ()  {
        const self = this;
        const arr = () => {
            console.log("hello my name is ",self.name)
        }
        arr();
    }
}
obj7.greet()


