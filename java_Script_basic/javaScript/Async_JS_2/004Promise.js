function download(url){
    return new Promise(function  exec(res , rej ){
        console.log("Started downloading data from " , url);
        setTimeout(function a(){
            let data = " some data "  + url ;
            console.log("Downloaded data from ",url);
            res(data);
            
        },3000);
    } );
}
console.log();


function writeFile(data , fileName){
    return new Promise(function exec(res , rej){
        setTimeout(function b(){
            console.log("Writing to file , " , fileName , "  is done");
            let status = "success";
            res(status);
        },3000);
    });
}

function upload(fileName , url ){
    return new Promise((resolve, reject) => {
        console.log("uploading file ", fileName , "to " , url);
        setTimeout(function c(){
            console.log("Upload is done ");
            let uploadStatus = "Success";
            reject(uploadStatus)
            
        },3000);
    })
}

function* exec(){
    console.log("Starting execution");
    
    const downloadedData= yield download("https://www.example.com");
    console.log("Data downloaded is  " , downloadedData);
    
    const fileResponse = yield writeFile(downloadedData,"example.txt");
    console.log("File write status " , fileResponse);
    
    const uploadStatus = yield upload("example.txt","https;//www.example.com");
    console.log("Upload status " , uploadStatus);

    return uploadStatus ;
    
    
}

const it = exec();// exec function will return us an gen object  having an iterator

const dt = it.next();
console.log("dt is ",dt);
dt.value.then(function do_After_Receiving(value){
    console.log("Calling do after receiving   is finished " , value);
    
    const future=it.next(value); // interesting
    if(future.done == true) return; // if there is nothing more to yield
    future.value.then(do_After_Receiving);
});






/* 
function* gen(){
    yield new Promise((res,rej) => {
        res(10);
    })
}
const it5 = gen();
const ft = it5.next();
*/