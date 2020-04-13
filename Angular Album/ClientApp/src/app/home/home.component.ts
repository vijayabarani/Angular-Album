import { Component } from '@angular/core';
import { UploadFileService } from './upload-file.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [UploadFileService]
})
export class HomeComponent {

  selectedFiles: FileList;

  constructor(private uploadService: UploadFileService) { }

  ngOnInit() {
  }

  upload() {
    console.log("In upload method");
    const file = this.selectedFiles.item(0);
    //let isSuccess: boolean  =this.uploadService.uploadFile(file);
    this.uploadService.uploadFile(file);
   // if (isSuccess==true)
      alert("File uploaded successfully in S3");
    //else
      //alert("File uploaded failed");

  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
}

