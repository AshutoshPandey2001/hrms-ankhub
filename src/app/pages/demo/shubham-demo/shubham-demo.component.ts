import { Component, OnInit, TemplateRef } from "@angular/core";
import { BsModalService, BsModalRef, ModalOptions } from "ngx-bootstrap/modal";
import { ToastrService } from "ngx-toastr";
import { NgxUiLoaderService } from "ngx-ui-loader";
import Swal from 'sweetalert2'

@Component({
  selector: "app-shubham-demo",
  templateUrl: "./shubham-demo.component.html",
  styleUrls: ["./shubham-demo.component.scss"],
})
export class ShubhamDemoComponent implements OnInit {
  modalRef: BsModalRef;
  config: ModalOptions = {
    backdrop: true, //backgroud color as dark
    keyboard: false, //Close on Esc button
    ignoreBackdropClick: true, //Close on outside click
    animated: true, //Add animation on open close
  };

  constructor(private modalService: BsModalService,private toastr: ToastrService,private ngxService: NgxUiLoaderService) {}

  ngOnInit() {
    this.startSpinner(); 
  }

  openDialog() {
    console.log("openDialog");
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  closeModal() {
    this.modalRef.hide();
  }

  submitData() {
    console.log('You Clicked on Submit button')
  }

  showAlert(){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      allowEscapeKey: false,
      allowOutsideClick: false,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      cancelButtonText:'Cancle'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
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

  startSpinner(){
    this.ngxService.start(); 
    setTimeout(() => {
      this.ngxService.stop(); 
    }, 2000);
  }
}
