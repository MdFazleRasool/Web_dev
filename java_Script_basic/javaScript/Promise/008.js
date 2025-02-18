function download(url){
    return new Promise(function  exec(res , rej ){
        console.log("Started downloading data from " , url);
        setTimeout(function (){
            let data = " some data "  , url ;
            console.log("Downloaded data from ",url);
            res(data);
            
        },3000);
    } );
}

download("https://www.example.com")
    .then(function f(value){
        console.log("Downloaded data is " , value); 
    })

function writeFile(fata , fileName){
    return new Promise(function exec(res , rej){
        setTimeout(function (){
            console.log("Writing to file , " , fileName , "  is done");
            let status = success;
            res(status);
        },2000);
    });
}

function upload(fileName , url , callback){
    return new Promise((resolve, reject) => {
        console.log("uploading file ", fileName , "to " , url);
        setTimeout(function(){
            console.log("Upload is done ");
            let uploadStatus = "Success";
            res(uploadStatus)
            
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

const p2 = download("https://www.example.com")
    .then(function handleDownload(value){
        console.log("Downloaded data is " , value);
        return value 
    });

const p3=p2.then(function startWrite(value){
    return writeFile(value , "file.txt");
})

// const p4 = p3.then(function UploadFile("file.txt", "https://www.example.com",){
    
// })


const p4 = download("https://www.example.com")
    .then(function handleDownload(value){
        console.log("Downloaded data is " , value);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                res(66);
            },4000);
        })
    });