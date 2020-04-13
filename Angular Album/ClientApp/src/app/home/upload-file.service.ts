//import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';

export class UploadFileService {

  uploadFile(file): boolean {
  
   // isSuccess: boolean = false;
    const contentType = file.type;
    const bucket = new S3(
      {
        accessKeyId: 'AKIAVD3UHHKZEPI5DSMX',
        secretAccessKey: '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',
        //region: 'US West (Oregon) us-west-2'
        //region: 'US East(N.Virginia)us-east - 1'
        region: 'us-east-1'
      }
    );
    const params = {
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
  }

  //uploadFile1(file) {
  //  console.log('File name:' + file.name);
  //  console.log('Successfully uploaded file.');
    
  //}

}

  

