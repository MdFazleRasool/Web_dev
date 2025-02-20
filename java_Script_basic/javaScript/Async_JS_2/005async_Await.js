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
            resolve(uploadStatus)
            
        },3000);
    })
}

    async function exec(){
        console.log("Starting execution");
    
        const downloadedData= await download("https://www.example.com");
        console.log("Data downloaded is  " , downloadedData);
    
        const fileResponse = await writeFile(downloadedData,"example.txt");
        console.log("File write status " , fileResponse);
        
        const uploadStatus = await upload("example.txt","https;//www.example.com");
        console.log("Upload status " , uploadStatus);

        return uploadStatus ;
    
    
    }

const AsyncAwait = exec();

//004promise.js mai jo code hum log manually likh rahe the async await khud baa khud wo kam kar dega 








