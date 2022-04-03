import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sdk-multiplefile',
  templateUrl: './sdk-multiplefile.component.html',
  styleUrls: ['./sdk-multiplefile.component.scss']
})
export class SdkMultiplefileComponent implements OnInit {

  myFiles:string [] = [];
  sMsg:string = '';

  ngOnInit () {  }

  getFileDetails (e) {
    //console.log (e.target.files);
    for (var i = 0; i < e.target.files.length; i++) { 
      this.myFiles.push(e.target.files[i]);
    }
    console.log(this.myFiles)
  }

  delete(i){
    this.myFiles.splice(i,1);
  }
  

}
