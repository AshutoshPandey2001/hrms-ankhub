import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-not-received',
  templateUrl: './not-received.component.html',
  styleUrls: ['./not-received.component.scss']
})
export class NotReceivedComponent implements OnInit {

  CandidateForm: FormGroup
  submitTed: any = false;
  editOperation = false;
  selectedObj: any;
  selectedIndex: any;
  CandidateList: any = [];
  terms = '';

  modalRef: BsModalRef;
  config: ModalOptions = {
    backdrop: true, //backgroud color as dark
    keyboard: false, //Close on Esc button
    ignoreBackdropClick: true, //Close on outside click
    animated: true, //Add animation on open close
  };
  constructor(private formBuilder: FormBuilder, private modalService: BsModalService, private ngxService: NgxUiLoaderService, private toastr: ToastrService) {
    this.CandidateForm = this.formBuilder.group({
      iD: ['', [Validators.required]],
      naMe: ['', [Validators.required]],
      eMail: ['', [Validators.required, Validators.email]],
      moBile: ['', [Validators.required, Validators.maxLength(10)]],
      StaTus: ['', [Validators.required]]

    })
    let localdata = localStorage.getItem('Not-received');
    if (localdata) {
      this.CandidateList = JSON.parse(localdata);
    }
  }

  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  closeModal() {
    this.modalRef.hide();
    this.clear();
    this.submitTed=false;
  }

  submitData() {
    this.submitTed = true;

    if (this.CandidateForm.valid) {
      this.CandidateList.push(this.CandidateForm.value)
      console.log("Submit Sucessfully", this.CandidateForm.value);
      {
        this.ngxService.start();
        setTimeout(() => {
          this.ngxService.stop();

          this.toastr.success('Thank you !', 'Submitted Sucessfully..!');
          let ref = document.getElementById('cancel')
          ref?.click();
        }, 2000);
      }
    }
    else {
      this.toastr.error('Please try again !', 'Inavalid input data !');
    }
    this.clear();
    this.closeModal();
    localStorage.setItem("Not-received", JSON.stringify(this.CandidateList))
  }

  updateData() {
    this.editOperation = false;
    {
      this.ngxService.start();
      setTimeout(() => {
        this.ngxService.stop();
        this.toastr.success('Updated !', ' Updated Sucessfully..!');
        let ref = document.getElementById('cancel')
        ref?.click();
       
      }, 2000);
    }
    this.CandidateList[this.selectedIndex].iD = this.CandidateForm.value.iD;
    this.CandidateList[this.selectedIndex].naMe = this.CandidateForm.value.naMe;
    this.CandidateList[this.selectedIndex].eMail = this.CandidateForm.value.eMail;
    this.CandidateList[this.selectedIndex].moBile = this.CandidateForm.value.moBile;
    this.CandidateList[this.selectedIndex].StaTus = this.CandidateForm.value.StaTus;
    this.clear();
    this.closeModal();
    localStorage.setItem("Not-received", JSON.stringify(this.CandidateList))
  }

  editData(index: any, obj: any) {
    this.editOperation = true;
    this.selectedIndex = index;
    this.selectedObj = obj;
    console.log('this.selectedcandidate', this.selectedObj)

    this.CandidateForm.patchValue({
      iD: obj.iD,
      naMe: obj.naMe,
      eMail: obj.eMail,
      moBile: obj.moBile,
      StaTus: obj.StaTus,
    })
  }

  deleteData(index: any) {
    console.log("Delete", index);
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
      cancelButtonText: 'Cancle'
    }).then((result) => {

      if (result.isConfirmed) {

        this.CandidateList.splice(index, 1);
        localStorage.setItem("Not-received", JSON.stringify(this.CandidateList));
        this.ngxService.start();
        setTimeout(() => {
          setTimeout(() => {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
           
          }, 1000);
          this.ngxService.stop();
        
        }, 2000);
      }
      this.toastr.success('Deleted !', ' Deleted Sucessfully..!');
    })

  }

  get f() {
    return this.CandidateForm.controls
  }

  clear() {
    this.CandidateForm.reset();
  }
}
