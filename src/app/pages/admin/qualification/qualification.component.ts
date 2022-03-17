import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { NgxUiLoaderService } from 'ngx-ui-loader';



@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss']
})
export class QualificationComponent implements OnInit {
  qualificationForm:FormGroup;
  qualificationlist:any=[''];
  subBtn=false;
  editbtn=false;
  selectobj:any;
  
  modalRef: BsModalRef;
  config: ModalOptions = {
    backdrop: true, 
    keyboard: false, 
    ignoreBackdropClick: true, 
    animated: true, 
  };
  
  constructor(private modalService: BsModalService , private FormBuilder:FormBuilder , private toastr: ToastrService ,private ngxService: NgxUiLoaderService) { 
    this.qualificationForm=this.FormBuilder.group({
      qualification:['',[Validators.required]]
    })

    let data= localStorage.getItem("Qualification_LIST");
    if(data){
      this.qualificationlist=JSON.parse(data);
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


  submitData() {
    this.subBtn=true;
    if(this.qualificationForm.valid){
    this.qualificationForm.value.id=this.randomID();
    this.qualificationlist.push(this.qualificationForm.value);
    localStorage.setItem("Qualification_LIST" , JSON.stringify(this.qualificationlist));
      this.clear();
      this.modalRef.hide();
      this.ngxService.start(); 
      setTimeout(() => {
        this.ngxService.stop(); 
      }, 2000);
      this.toastr.success('Submitted Successfully!', 'Details Valid!');

    }else{
      this.toastr.error('Please Enter Correct Details!', 'Details invalid!');;
    }
  }


  UpdateData(){
    this.subBtn=true;
    if(this.qualificationForm.valid){
    this.editbtn=false;
   this.qualificationlist[this.selectobj].qualification=this.qualificationForm.value.qualification; 
   localStorage.setItem("Qualification_LIST" , JSON.stringify(this.qualificationlist));
   this.toastr.warning('Updated Successfully!', 'Details Valid!');
   this.modalRef.hide();
   this.clear();
   this.ngxService.start(); 
   setTimeout(() => {
     this.ngxService.stop(); 
   }, 2000);
  }else{
    this.toastr.error('Please Enter Correct Details!', 'Details invalid!');;
  }
  }


  edit(obj:any){
    this.editbtn=true;
    this.selectobj=this.qualificationlist.findIndex((x: any) => x.id === obj.id);
    this.qualificationForm.patchValue({
      qualification:obj.qualification
    })
  }


  delqual(id:any){
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
        this.selectobj=this.qualificationlist.findIndex((x: any) => x.id === id);
        this.qualificationlist.splice(this.selectobj,1);
    localStorage.setItem("Qualification_LIST" , JSON.stringify(this.qualificationlist));
        Swal.fire(
          
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
    

  }
 randomID() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

  get f(){
    return this.qualificationForm.controls;
  }

  clear(){
    this.qualificationForm.reset();
  }
}
