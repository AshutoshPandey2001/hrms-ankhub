import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sdk-imageuploader',
  templateUrl: './sdk-imageuploader.component.html',
  styleUrls: ['./sdk-imageuploader.component.scss']
})
export class SdkImageuploaderComponent implements OnInit {
selectedFiles = null;
public imagePath;
  imgURL: any = "https://i.picsum.photos/id/428/200/200.jpg?hmac=t9FYhwylg9uE-Y2lJluz7aIxlV_-R2FJQZV8UpoOu7M";
  
  public message: string;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

//   onFileSelected(event){
// this.selectedFiles = event.target.files[0];
//     console.log(event )
//   }

//   upLoad(){

//   }
preview(files) {
  if (files.length === 0)
    return;

  var mimeType = files[0].type;
  if (mimeType.match(/image\/*/) == null) {
    this.message = "Only images are supported.";
    return;
  }

  var reader = new FileReader();
  this.imagePath = files;
  reader.readAsDataURL(files[0]); 
  reader.onload = (_event) => { 
    this.imgURL = reader.result; 
  }
}
  }
