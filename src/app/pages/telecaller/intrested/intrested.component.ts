import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService, ModalOptions } from "ngx-bootstrap/modal";
import { NgxUiLoaderService } from 'ngx-ui-loader';
import Swal from 'sweetalert2'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-intrested',
  templateUrl: './intrested.component.html',
  styleUrls: ['./intrested.component.scss']
})
export class IntrestedComponent implements OnInit {

  intrestedForm: FormGroup
  dataSub: any = false;
  isUpdate = false;
  selectedindex: any;
  
  intrestedList: any = [];
  searchKey = '';

  modalRef: BsModalRef;
  config: ModalOptions = {
    backdrop: true, //backgroud color as dark
    keyboard: false, //Close on Esc button
    ignoreBackdropClick: true, //Close on outside click
    animated: true, //Add animation on open close
  };

  constructor(private formBuilder: FormBuilder, private modalService: BsModalService, private ngxService: NgxUiLoaderService, private toastr: ToastrService) {
    this.intrestedForm = this.formBuilder.group({
      Id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.maxLength(10)]],
      Status: ['', [Validators.required]]

    })
    let data = localStorage.getItem('INTRESTED_LIST');
    if (data) {
      this.intrestedList = JSON.parse(data);
    }

  }

  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
    this.isUpdate = false;
    this.clear();
  }

  closeModal() {
    this.modalRef.hide();
  }
  submitData() {
    this.dataSub = true;

    if (this.intrestedForm.valid) {
      this.intrestedList.push(this.intrestedForm.value)
      console.log("Submit Sucessfully", this.intrestedForm.value);
      {
        this.ngxService.start();
        setTimeout(() => {
          this.intrestedForm.value.id = this.randomId();
          this.ngxService.stop();
          
          this.toastr.success('Sucessfully..!', 'Submitted ');
         
        }, 2000);
        this.closeModal();
      }
    }
    else {
      this.toastr.error('Please try again !', 'Inavalid input data !');
    }
    this.clear();
    localStorage.setItem("INTRESTED_LIST", JSON.stringify(this.intrestedList))
  }


  dataUpdate() {
    this.isUpdate = false;

   
    
      this.ngxService.start();
      setTimeout(() => {
        this.ngxService.stop();

        this.toastr.success('Sucessfully..!', ' Updated ');
       
   
    
    this.intrestedList[this.selectedindex].Id = this.intrestedForm.value.Id;
    this.intrestedList[this.selectedindex].name = this.intrestedForm.value.name;
    this.intrestedList[this.selectedindex].email = this.intrestedForm.value.email;
    this.intrestedList[this.selectedindex].mobile = this.intrestedForm.value.mobile;
    this.intrestedList[this.selectedindex].Status = this.intrestedForm.value.Status;
    this.closeModal();
    this.clear();
    localStorage.setItem("INTRESTED_LIST", JSON.stringify(this.intrestedList));
  }, 2000);
  }

  dataEdit(obj: any, template: TemplateRef<any>) {
    this.isUpdate = true;
 
   
      this.modalRef = this.modalService.show(template, this.config);
    
    
    this.selectedindex = obj;
 
    this.selectedindex = this.intrestedList.findIndex((x: any) => x.id === obj.id);
    this.intrestedForm.patchValue({
      Id: obj.Id,
      name: obj.name,
      email: obj.email,
      mobile: obj.mobile,
      Status: obj.Status,
    })

  }

  dataDelete(index: any) {

    Swal.fire({
      
      title: 'Are you sure?',
      text: "You won't be able to delete this!",
      icon: 'warning',
      allowEscapeKey: false,
      allowOutsideClick: false,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancle'
    }).then((result) => {

      if (result.isConfirmed) {

       
     
        this.ngxService.start();
        setTimeout(() => {
          setTimeout(() => {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
           
            this.toastr.success('Sucessfully..!', 'Deleted  ');
          }, 1000);
          this.ngxService.stop();
          this.intrestedList.splice(index,1);
        
          localStorage.setItem("INTRESTED_LIST", JSON.stringify(this.intrestedList))
        }, 2000);
       
      }
    })
   
  }

  randomId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  get f() {
    return this.intrestedForm.controls
  }

  clear() {
    this.intrestedForm.reset();
  }

}
