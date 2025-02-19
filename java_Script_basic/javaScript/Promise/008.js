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

/* 
download("https://www.example.com")
    .then(function f(value){
        console.log("Downloaded data is " , value); 
    })
*/

function writeFile(data , fileName){
    return new Promise(function exec(res , rej){
        setTimeout(function b(){
            console.log("Writing to file , " , fileName , "  is done");
            let status = "success";
            res(status);
        },2000);
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

/*
// if only want to download , write and upload to run parallaly

download("https://www.example.com")
.then(function f(value){
    console.log("Downloaded data is " , value); 
}) ;

writeFile("somedata  " , "file.txt")
.then(function f(value){
    console.log("Write status is " , value);
}) ;


upload("file.txt" , "https://www.example.com")
.then(function f(value){
    console.log("Upload  status is " , value);
}) ;


*/ 

/*

download --> waiting ffor downloading to complete  --> we execute function f --> f calls write file  ->
when file writing is done p2 is resolved  --> then g is executed     --> g calls  upload -->when p3 is done
p3 is resolved  -> then h is executed

*/

/*

const p2 = download("https://www.example.com")
    .then(function handleDownload(value){
        console.log("Downloaded data is " , value);
        return writeFile(value,"file.txt");
    });

const p3=p2.then(function startWrite(value){
    console.log("file written" , value);
    return upload(value , "https://www.example.com");
})

p3.then(function h(value){
    console.log("file upload " ,value);
    
})

*/
// Another way of doing same things
// .then() chaining

/* 
console.log("Start");

const p5 = download("https://www.example.com")
    .then(function handleDownload(value){
        console.log("Downloaded data is " , value);
        return writeFile(value,"file.txt");
    },function fr(){
        console.log("Download failed");
        throw new Error("Download Failed")
        
    })
    .then(function startWrite(value){
        console.log("file written" , value);
        return upload(value , "https://www.example.com");
    },function gr(){
        console.log("File write  failed");
        throw new Error("File write Failed")
        
    })
    .then(function uploading(value){
        console.log("file upload " ,value);
    },function hr(){
        console.log("File upload  failed");
        // throw new Error("File  upload Failed") ; // no need to throw here
        
    })
    console.log("End");
*/

console.log("Start");

    const p7 = download("https://www.example.com")
        .then(function handleDownload(value){
            console.log("Downloaded data is " , value);
            return writeFile(value,"file.txt");
        })
        .then(function startWrite(value){
            console.log("file written" , value);
            return upload(value , "https://www.example.com");
        })
        .then(function uploading(value){
            console.log("file upload " ,value);
        })
        .catch(function i(value){
            console.log("Error Occured" , value);
            
        }) // check it by making any  one of the 3 function or all to reject

console.log("End");
console.log("hi");



/*
const p4 = download("https://www.example.com")
    .then(function handleDownload(value){
        console.log("Downloaded data is " , value);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                res(66);
            },4000);
        })
    });

*/