import { Injectable } from '@angular/core';
import { S3 } from 'aws-sdk';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private s3: S3;
  constructor() {
    this.s3 = new S3({
      region: environment.aws.region,
      accessKeyId: environment.aws.accessKeyId,
      secretAccessKey: environment.aws.secretAccessKey,
    });
  }

  uploadFile(bucketName: string, file: File): Promise<any> {
    const params = {
      Bucket: bucketName,
      Key: file.name,
      Body: file,
    };

    return this.s3.upload(params).promise();
  }

  getImageFromS3(bucketName: string, key: string): Promise<any> {
    const params = {
      Bucket: bucketName,
      Key: key,
    };

    return this.s3.getObject(params).promise();
  }
  
  setProjectConfig() {

  }
}
