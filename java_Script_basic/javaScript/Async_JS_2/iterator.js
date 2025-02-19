function fetchNextElement(arr){
    let idx=0;
    function next(){
        if(idx >=  arr.length){
            return undefined;
        }
        const newElement = arr[idx];
        idx++;
        return newElement
    }
    return next;
}
// arr[1,2,3,4,5]
//fetchNextElement(arr) => 1
//fetchNextElement(arr) => 2
//fetchNextElement(arr) => 3
//fetchNextElement(arr) => 4
//fetchNextElement(arr) => 5
//fetchNextElement(arr) => undefined



