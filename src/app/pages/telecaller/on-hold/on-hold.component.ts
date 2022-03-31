import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService, ModalOptions } from "ngx-bootstrap/modal";
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-on-hold',
  templateUrl: './on-hold.component.html',
  styleUrls: ['./on-hold.component.scss']
})
export class OnHoldComponent implements OnInit {

  holdonForm: FormGroup
  submitted: any = false;
  editoperation = false;
  selectedobj: any;
  selectedindex: any;
  holdList: any = [];
  terms = '';

  modalRef: BsModalRef;
  config: ModalOptions = {
    backdrop: true, //backgroud color as dark
    keyboard: false, //Close on Esc button
    ignoreBackdropClick: true, //Close on outside click
    animated: true, //Add animation on open close
  };

  constructor(private formBuilder: FormBuilder, private modalService: BsModalService, private ngxService: NgxUiLoaderService, private toastr: ToastrService) {
    this.holdonForm = this.formBuilder.group({
      Id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      Project: ['', [Validators.required]],
      Status: ['', [Validators.required]]

    })
    let data = localStorage.getItem('HOLD_LIST');
    if (data) {
      this.holdList = JSON.parse(data);
    }

  }

  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>) {
    this.submitted = false;
    this.modalRef = this.modalService.show(template, this.config);
    this.clear();
  }

  closeModal() {
    this.modalRef.hide();
    this.clear();
  }
  Save() {
    this.submitted = true;

    if (this.holdonForm.valid) {
      this.holdList.push(this.holdonForm.value)
      console.log("Submit Sucessfully", this.holdonForm.value);
      {
        this.ngxService.start();
        setTimeout(() => {
          this.holdonForm.value.id = this.randomId();
          this.ngxService.stop(); 
          this.toastr.success( 'Client Added Sucessfully..!');
        }, 2000);
        this.closeModal();
      }
    }
    else {
      this.toastr.error('Try again !', 'All Field Requried!');
    }
    this.clear();
    localStorage.setItem("HOLD_LIST", JSON.stringify(this.holdList))
  }

  Update() {
    this.editoperation = false;
    console.log("update", this.holdonForm.value);
    {
      this.ngxService.start();
      setTimeout(() => {
        this.ngxService.stop();
        this.toastr.success( 'Updated Sucessfully..!');
      }, 2000);
    }
    this.holdList[this.selectedobj].Id = this.holdonForm.value.Id;
    this.holdList[this.selectedobj].name = this.holdonForm.value.name;
    this.holdList[this.selectedobj].email = this.holdonForm.value.email;
    this.holdList[this.selectedobj].Project = this.holdonForm.value.Project;
    this.holdList[this.selectedobj].Status = this.holdonForm.value.Status;
    this.closeModal();
    this.clear();
    localStorage.setItem("HOLD_LIST", JSON.stringify(this.holdList));
  }

  edit(obj: any) {
    this.editoperation = true;
    this.selectedobj = obj;
    console.log('this.selectedobj', this.selectedobj)
    this.selectedobj = this.holdList.findIndex((x: any) => x.id === obj.id);
    this.holdonForm.patchValue({
      Id: obj.Id,
      name: obj.name,
      email: obj.email,
      Project: obj.Project,
      Status: obj.Status,
    })
  }

  delete(index: any) {
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
        this.holdList.splice(index,1);
        console.log("delete",index);
        localStorage.setItem("HOLD_LIST", JSON.stringify(this.holdList))
        this.ngxService.start();
        setTimeout(() => {
          setTimeout(() => {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            this.toastr.success('Deleted !', 'Deleted Sucessfully..!');
          }, 1000);
          this.ngxService.stop();
        }, 2000);   
      }
    })  
  }
  randomId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }
  get f() {
    return this.holdonForm.controls
  }
  clear() {
    this.holdonForm.reset();
  }
}
