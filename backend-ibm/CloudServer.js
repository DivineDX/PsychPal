var AWS = require('ibm-cos-sdk');
const fs = require('fs');
var async = require("async");
const open = require('open');
const express = require('express');
var app = express();
var upload = require('express-fileupload');
const http = require('http');
http.Server(app).listen(80); // make server listen on port 80

app.use(upload()); // configure middleware

console.log("Server Started at port 80");

// configuring ibm cloud object storage
var config = {
  endpoint: "s3.us-south.cloud-object-storage.appdomain.cloud",
  ibmAuthEndpoint: 'https://iam.ng.bluemix.net/oidc/token',
  serviceInstanceId: "crn:v1:bluemix:public:cloud-object-storage:global:a/83ccf76e28b74ce49cf9f79fff655b25:f070cbd8-f6d8-4cd7-88ab-008ab321ee0f::",
  accessKeyId: "51a981da44e04b79932ac12f40de99d1",
  secretAccessKey: "742e24bd5501bc3084913ab621f021e8471b5c497cd87798",
  apiKeyId: "PK0FDtD6CRK9QZeovk4e9xXFsh9ERm5uF8_fydFakl9k",
  credentials: new AWS.Credentials('51a981da44e04b79932ac12f40de99d1', '742e24bd5501bc3084913ab621f021e8471b5c497cd87798', sessionToken = null),
  signatureVersion: 'v4'
};

//variables
var cos = new AWS.S3(config);
var reqName = '';
var fileName = '';
var dirname = '';
var category = 'doctors-records';
var posturl = '';

//method to upload files into ibm cloud object storage
function multiPartUpload(bucketName, itemName, filePath) {
    var uploadID = null;

    if (!fs.existsSync(filePath)) {
        log.error(new Error(`The file \'${filePath}\' does not exist or is not accessible.`));
        return;
    }

    console.log(`Starting multi-part upload for ${itemName} to bucket: ${bucketName}`);
    return cos.createMultipartUpload({
        Bucket: bucketName,
        Key: itemName
    }).promise()
    .then((data) => {
        uploadID = data.UploadId;

        //begin the file upload        
        fs.readFile(filePath, (e, fileData) => {
            //min 5MB part
            var partSize = 1024 * 1024 * 5;
            var partCount = Math.ceil(fileData.length / partSize);

            async.timesSeries(partCount, (partNum, next) => {
                var start = partNum * partSize;
                var end = Math.min(start + partSize, fileData.length);

                partNum++;

                console.log(`Uploading to ${itemName} (part ${partNum} of ${partCount})`);  

                cos.uploadPart({
                    Body: fileData.slice(start, end),
                    Bucket: bucketName,
                    Key: itemName,
                    PartNumber: partNum,
                    UploadId: uploadID
                }).promise()
                .then((data) => {
                    next(e, {ETag: data.ETag, PartNumber: partNum});
                })
                .catch((e) => {
                    cancelMultiPartUpload(bucketName, itemName, uploadID);
                    console.error(`ERROR: ${e.code} - ${e.message}\n`);
                });
            }, (e, dataPacks) => {
                cos.completeMultipartUpload({
                    Bucket: bucketName,
                    Key: itemName,
                    MultipartUpload: {
                        Parts: dataPacks
                    },
                    UploadId: uploadID
                }).promise()
                .then(console.log(`Upload of all ${partCount} parts of ${itemName} successful.`))
                .catch((e) => {
                    cancelMultiPartUpload(bucketName, itemName, uploadID);
                    console.error(`ERROR: ${e.code} - ${e.message}\n`);
                });
            });
        });
        fs.unlink( dirname + '/uploads/' + fileName, function(error) {
          if (error) {
            console.error(error);
          }
          console.log(dirname + '/uploads/' + fileName);
        })
    })
    .catch((e) => {
        console.error(`ERROR: ${e.code} - ${e.message}\n`);
    });
}

//method to delete items in ibm cloud object storage
function deleteItems(bucketName, itemName) {
  var deleteRequest = {
      "Objects": [
          { "Key": itemName}
      ]        
  }
  return cos.deleteObjects({
      Bucket: bucketName,
      Delete: deleteRequest
  }).promise()
  .then((data) => {
      console.log(`Deleted items for ${bucketName}`);
      console.log(data.Deleted);
  })
  .catch((e) => {
      console.log(`ERROR: ${e.code} - ${e.message}\n`);
  });    
}
function ignoreFavicon(req, res, next) {
  if (req.originalUrl === '/favicon.ico') {
    res.status(204).json({nope: true});
  } else {
    next();
  }
}
app.use(ignoreFavicon);
//url to access server
app.get('/:function/:category/:name',function(req,res){
  if (req.params.function == 'download') {  //retrieving data from ibm cloud object storage
    const url = cos.getSignedUrl('getObject', {
      Bucket: req.params.category,
      Key: req.params.name,
      Expires: 60 * 5, // 5 minutes
    });
    res.writeHead(302, {
      'Location': url
    });
    res.end();
  } else if (req.params.function == 'delete') {  // deleting data from ibm cloud object storage
    deleteItems(req.params.category, req.params.name)
    res.send("record deleted");
  }else if (req.params.function == 'upload'){                                         //uploading data from ibm cloud object storage
    reqName = req.params.name;
    category = req.params.category;
    res.sendFile(__dirname+'/upload.html');
  }
})
// for uploading of files into server
app.post("/upload/:category/upload",function(req,res){
  if(req.files.upfile){
    dirname = __dirname;
    var file = req.files.upfile,
      name = file.name,
      type = file.mimetype;
    fileName = name;
    var uploadpath = __dirname + '/uploads/' + name;
    file.mv(uploadpath,function(err){
      if(err){
        console.log("File Upload Failed",name,err);
        res.send("Error Occured!")
      }
      else {
        multiPartUpload(category, reqName, __dirname + '/uploads/' + name)
        console.log("File Uploaded" + name);
        res.send('Done! Uploading files');
      }
    });
  }
  else {
    res.send("No File selected !");
    res.end();
  };
})