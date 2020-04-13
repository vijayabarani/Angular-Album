"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import * as AWS from 'aws-sdk/global';
var S3 = require("aws-sdk/clients/s3");
var UploadFileService = /** @class */ (function () {
    function UploadFileService() {
    }
    UploadFileService.prototype.uploadFile = function (file) {
        // isSuccess: boolean = false;
        var contentType = file.type;
        var bucket = new S3({
            accessKeyId: 'AKIAVD3UHHKZEPI5DSMX',
            secretAccessKey: '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',
            //region: 'US West (Oregon) us-west-2'
            //region: 'US East(N.Virginia)us-east - 1'
            region: 'us-east-1'
        });
        var params = {
            Bucket: 'album-angular',
            Key: file.name,
            Body: file,
            ACL: 'public-read',
            ContentType: contentType
        };
        bucket.upload(params, function (err, data) {
            if (err) {
                console.log('There was an error uploading your file: ', err);
                return false;
            }
            console.log('Successfully uploaded file.', data);
            return true;
        });
        return true;
    };
    return UploadFileService;
}());
exports.UploadFileService = UploadFileService;
//# sourceMappingURL=upload-file.service.js.map