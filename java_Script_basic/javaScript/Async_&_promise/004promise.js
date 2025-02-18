/* 
*  Implement a set of dummy functions which can mimic the behavior of the following functions:

1. download → This function should mimic downloading of somecontent from a url

2. writeFile This function should mimic writing of some content to a file

3. upload This function should mimic uploading the file to a server

* Now after you've implemented these functions, try to use them in a scenario where we first

* download a file, then write it to a disk and then upload it to a server.

*/

function download(url, callback){
    console.log("Downloading from", url);
    setTimeout(() => { 
        console.log("Download is done");
        let downloadedData = "Some data"; 
        callback?.(downloadedData);
    }, 3000);
}

function writeFile(data,fileName,callback){
    console.log("Writing ", data , " to file");
    setTimeout( () => {
        console.log("writing to file " , fileName , " is done");
        let status = " success"
        callback?.(status);
    },2000) ;
} 

/* ?. :- optional chaining operator


The optional chaining (?.) operator accesses an object's 
property or calls a function. If the object accessed
or function called using this operator is undefined
or null, the expression short circuits and 
evaluates to undefined instead of throwing an error.


*/
function upload(fileName,url,callback){
    //fileName tells the name of the file to be Uploaded
    console.log("uploading file ",fileName," to ",url);
    setTimeout(() => {
        console.log("upload is done ");
        let uploadStatus ="success";
        callback?.(uploadStatus);
    },3000);
    
}



function process(){
    download("www.something.com", (data) => {
        // do something with the data
        writeFile(data,"file.txt" , (status) => {
            upload("file.txt" , "https://www.example1.com",(uploadStatus) => {
                console.log("All done");
                
            });
        });
    
    });
} // usage of callback hell and inversion control
process();