let x = function(){
    console.log("anonymous function ");
    
}
x();

// Immediately invoked function
(function called(){

})();

(function (x){
    console.log(x);
    
})(5);

