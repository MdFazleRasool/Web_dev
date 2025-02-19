arr=[1,2,3,4,5];
let it = arr[Symbol.iterator]();
it;
it.next();//{value: 2, done: false}


// Custom itertaor
function fetchNextElement(arr){
    let idx=0;
    function next(){
        if(idx >=  arr.length){
            return  {value:undefined, done : true};
        }
        const newElement = arr[idx];
        idx++;
        return {value:newElement, done : false};
    }
    return {next};
}
const iterator = fetchNextElement([1,2,3]); // {next:function}

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
