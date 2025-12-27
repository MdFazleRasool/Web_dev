//sub(10,5);

let sub = (a,b) => {
    console.log("arrow func");
    if(a<b){
        console.log("b-a",b-a);
    }
    else{
        console.log("a-b",a-b);
    }
}

sub(10,5);

subtract(10,5);
sub(10,5);

function subtract(a,b){
    console.log("normal func");
    
    if(a<b){
        console.log("b-a",b-a);
    }
    else{
        console.log("a-b",a-b);
    }
}
subtract(10,5);


let add = function(a,b){
    // un_named func
    console.log("Anonymous Function Expression.");
    
    if(a<b){
        console.log("b-a",b-a);
    }
    else{
        console.log("a-b",a-b);
    }
}

add(10,12)