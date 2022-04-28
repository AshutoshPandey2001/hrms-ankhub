import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { HttpClient } from '@angular/common/http';



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
  selectId='';
  newIndex='';
  searchitem='';
  
  modalRef: BsModalRef;
  config: ModalOptions = {
    backdrop: true, 
    keyboard: false, 
    ignoreBackdropClick: true, 
    animated: true, 
  };
  baseurl="https://hrms-dev-server.herokuapp.com/api/";

  constructor(private modalService: BsModalService ,
     private FormBuilder:FormBuilder ,
      private toastr: ToastrService ,
      private ngxService: NgxUiLoaderService,
      private httpClient:HttpClient

      ) { 
    this.qualificationForm=this.FormBuilder.group({
      qualificationName:['',[Validators.required]],
      qualificationID:['',[Validators.required]]

    })

    let data= localStorage.getItem("Qualification_LIST");
    if(data){
      this.qualificationlist=JSON.parse(data);
    }
  }
  

  ngOnInit(): void {
    this.getAllQualification()

  }
  getAllQualification(){
    this.httpClient.get(this.baseurl + 'qualification').subscribe(
      (response)=>{
        console.log('response', response);
        this.qualificationlist = response["data"];
      },
      (error)=>{
        console.log('error', error);     
     },
    )
     }

  openModal(template: TemplateRef<any>) {
    this.subBtn=false;
    this.clear();
    this.modalRef = this.modalService.show(template, this.config);
  }

  closeModal() {
    this.editbtn=false;
    this.modalRef.hide();
  }


  submitData() {
    this.subBtn=true;
    if(this.qualificationForm.valid){
    
     this.closeModal();
      this.ngxService.start(); 
      setTimeout(() => {
        this.qualificationForm.value.id=this.randomID();
    this.qualificationlist.push(this.qualificationForm.value);

    this.httpClient.post(this.baseurl + 'qualification' , this.qualificationForm.value).subscribe(
      (response)=>{
        console.log('response', response);
        this.getAllQualification();
      },
      (error)=>{
        console.log('error', error);     
     },
    )

    localStorage.setItem("Qualification_LIST" , JSON.stringify(this.qualificationlist));
      this.clear();
      this.toastr.success('Submitted Successfully!', 'Details Valid!');

        this.ngxService.stop(); 
      }, 2000);
     
    }else{
      Swal.fire(          
        'Invalid!',
        'Pleasr Enter Correct Details.',
        'warning'
      )
    }
  }


  UpdateData(){
    this.subBtn=true;
    if(this.qualificationForm.valid){
    this.editbtn=false;
    this.closeModal();
   this.ngxService.start(); 
   setTimeout(() => {
    let sendUrl = this.baseurl + 'qualification/' + this.selectId;
    this.httpClient.put(sendUrl, this.qualificationForm.value).subscribe(
      (response)=>{
        console.log('response', response)
        this.getAllQualification();
      },
      (error)=>{
        console.log('error', error)
      },
     )
    // this.qualificationlist[this.selectId].qualificationName=this.qualificationForm.value.qualificationName; 
    // this.qualificationlist[this.selectId].qualificationID=this.qualificationForm.value.qualificationID; 

    localStorage.setItem("Qualification_LIST" , JSON.stringify(this.qualificationlist));
    this.toastr.success('Updated Successfully!', 'Details Valid!');
    
    this.clear();
     this.ngxService.stop(); 
   }, 2000);
  }else{
    Swal.fire(
          
      'Invalid!',
      'Pleasr Enter Correct Details.',
      'warning'
    )
   
  }
  }


  edit(i,data, template1:TemplateRef<any>){
    this.selectId=data._id;
    console.log('selectId', this.selectId)
    this.newIndex=i;
    this.editbtn=true;
    this.modalRef = this.modalService.show(template1, this.config);
    this.qualificationForm.patchValue({
      qualificationName:this.qualificationlist[i].qualificationName,
      qualificationID: this.qualificationlist[i].qualificationID
    })
  }

  // edit(obj:any , template1: TemplateRef<any> , data){
    
  //   this.editbtn=true;
  //   this.modalRef = this.modalService.show(template1, this.config);

  //   this.selectId=data._id;
  //   // this.qualificationlist.findIndex((x: any) => x.id === obj.id);
  //   this.qualificationForm.patchValue({
  //     qualificationName:obj.qualificationName,
  //     qualificationID: obj.qualificationID
  //   })
  // }


  delqual(data){

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
        this.ngxService.start(); 
   setTimeout(() => {

    // this.selectId=this.qualificationlist.findIndex((x: any) => x.id === id);
    // this.qualificationlist.splice(this.selectId,1);
    let sendUrl = this.baseurl + 'qualification/' + data._id;

    this.httpClient.delete(sendUrl).subscribe(
      (response)=>{
        console.log('response', response)
        this.getAllQualification();
      },
      (error)=>{
        console.log('error', error)
      },
     )

localStorage.setItem("Qualification_LIST" , JSON.stringify(this.qualificationlist));
    this.ngxService.stop(); 
    Swal.fire(
          
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
    this.toastr.success('Deleted Successfully!', 'Entry!');

  }, 2000);
       
       
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
