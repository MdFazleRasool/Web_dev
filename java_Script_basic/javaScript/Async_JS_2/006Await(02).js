/*


    An async function always like always returns a promise

    If we have an async function returning a non promise value like object number string null etc,
    then async function will create a brand new Promise in the memory and then immediately fulfill
    the promise using the returned value and hence u get an already fulfilled promise.

    but if we return a normal promise object, then whatever if the flow of that promise will work.

    Whenever we hit await keyword the async function we immediately Exit .

    So, when we will go back?

    We only await on a promise object. Whenever that promise is fulfilled or rejected 
    then if the main thread is empty then we re-enter the async function at the same 
    place where we exitted with the resolved/rejected value of promise.

    async function internally uses gen iterator concepts but they do not need to be 
    manually controlled by you. JS handles evrything hence unlike gen functions when 
    we call async function, execution starts immediately.
*/ 



async function fazle() {
    return 10;
}
fazle()
async function fazle() {
    throw 10;
}
fazle()
async function fazle() {
    return new Promise((res,rej) => {
        setTimeout( () => {
            res(10);
        },2000);
    });
 }
 fazle()