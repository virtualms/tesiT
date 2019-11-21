/***read from bucket***/
var fs = require('fs');
var AWS = require('aws-sdk');
var s3 = new AWS.S3();

/***load file from s3 and count***/
function load_from_s3(){

    var params = {   Bucket: "vmsbucket2019",   Key: "test600.txt" };  

    var tot=0;
    var occ=0,  obj;

    
    s3.getObject(params).createReadStream('utf8').on('data', function(chunk) {
        
            //total lenght
            tot = tot + chunk.length;

            if (( obj = String(chunk).match(/a/g)) != null )
                occ=occ+obj.length;
                
            //occorrenze di 'a'
            //occ = occ + (String(chunk).match(/aaa/g)).length;
        }).on('end', function() {
        console.log("Tot: " + tot + ", Occ: "+occ);
    })

}


/***MAIN***/
exports.handler =  (event) => {
    
    /***logic***/
    load_from_s3();
    
    /***end***/
    const response = {
        statusCode: 200,
        body: JSON.stringify('Done '),
    };
    
    return response;
};