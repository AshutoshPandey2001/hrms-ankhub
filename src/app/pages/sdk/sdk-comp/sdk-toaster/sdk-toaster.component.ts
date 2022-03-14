import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sdk-toaster',
  templateUrl: './sdk-toaster.component.html',
  styleUrls: ['./sdk-toaster.component.scss']
})
export class SdkToasterComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  showSuccessToaster(){
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  showInfoToaster(){
    this.toastr.info('Hello world!', 'Toastr fun!');
  }

  showWarningToaster(){
    this.toastr.warning('Hello world!', 'Toastr fun!');
  }

  showErrorToaster(){
    this.toastr.error('Hello world!', 'Toastr fun!');
  }


}
