import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-sdk-spinner',
  templateUrl: './sdk-spinner.component.html',
  styleUrls: ['./sdk-spinner.component.scss']
})
export class SdkSpinnerComponent implements OnInit {

  constructor(private ngxService: NgxUiLoaderService) { }

  ngOnInit(): void {
  }

  startSpinner(){
    this.ngxService.start(); 
    setTimeout(() => {
      this.ngxService.stop(); 
    }, 2000);
  }

}
