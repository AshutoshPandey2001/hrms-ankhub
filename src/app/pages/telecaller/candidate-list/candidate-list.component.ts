import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss']
})
export class CandidateListComponent implements OnInit {


  candidateForm: FormGroup
  submitted: any = false;
  editoperation = false;
  selectedobj: any;
  selectedindex: any;
  candidateList: any = [];
  terms = '';

  modalRef: BsModalRef;
  config: ModalOptions = {
    backdrop: true, //backgroud color as dark
    keyboard: false, //Close on Esc button
    ignoreBackdropClick: true, //Close on outside click
    animated: true, //Add animation on open close
  };

  constructor(private formBuilder: FormBuilder, private modalService: BsModalService, private ngxService: NgxUiLoaderService, private toastr: ToastrService) {
    this.candidateForm = this.formBuilder.group({
      Id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.maxLength(10)]],
      Status: ['', [Validators.required]]

    })
    let data = localStorage.getItem('CANDIDATE_LIST');
    if (data) {
      this.candidateList = JSON.parse(data);
    }

  }

  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  closeModal() {
    this.modalRef.hide();
  }
  Save() {
    this.submitted = true;

    if (this.candidateForm.valid) {
      this.candidateList.push(this.candidateForm.value)
      console.log("Submit Sucessfully", this.candidateForm.value);
      {
        this.ngxService.start();
        setTimeout(() => {
          this.candidateForm.value.id = this.randomId();
          this.ngxService.stop();
          
          this.toastr.success('Thank you !', 'Data Stored Sucessfully..!');
         
        }, 2000);
        this.closeModal();
      }
    }
    else {
      this.toastr.error('Please try again !', 'Inavalid input data !');
    }
    this.clear();
    localStorage.setItem("CANDIDATE_LIST", JSON.stringify(this.candidateList))
  }


  Update() {
    this.editoperation = false;
    console.log("update", this.candidateForm.value);
   
    {
      this.ngxService.start();
      setTimeout(() => {
        this.ngxService.stop();

        this.toastr.success('Thank you !', 'Data Updated Sucessfully..!');
       
      }, 2000);
    }
    this.candidateList[this.selectedobj].Id = this.candidateForm.value.Id;
    this.candidateList[this.selectedobj].name = this.candidateForm.value.name;
    this.candidateList[this.selectedobj].email = this.candidateForm.value.email;
    this.candidateList[this.selectedobj].mobile = this.candidateForm.value.mobile;
    this.candidateList[this.selectedobj].Status = this.candidateForm.value.Status;
    this.closeModal();
    this.clear();
    localStorage.setItem("CANDIDATE_LIST", JSON.stringify(this.candidateList));
  }

  edit(obj: any) {
    this.editoperation = true;

    this.selectedobj = obj;
    console.log('this.selectedobj', this.selectedobj)
    this.selectedobj = this.candidateList.findIndex((x: any) => x.id === obj.id);
    this.candidateForm.patchValue({
      Id: obj.Id,
      name: obj.name,
      email: obj.email,
      mobile: obj.mobile,
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

       
        this.candidateList.splice(index,1);
        console.log("delete",index);
        localStorage.setItem("CANDIDATE_LIST", JSON.stringify(this.candidateList))
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
    return this.candidateForm.controls
  }

  clear() {
    this.candidateForm.reset();
  }
}