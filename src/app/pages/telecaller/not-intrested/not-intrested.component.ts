import { Component, OnInit ,TemplateRef} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { NgxUiLoaderService } from 'ngx-ui-loader';


@Component({
  selector: 'app-not-intrested',
  templateUrl: './not-intrested.component.html',
  styleUrls: ['./not-intrested.component.scss']
})
export class NotIntrestedComponent implements OnInit {

  notIntrestedForm:FormGroup;
  notIntrestedcandidatelist:any=[''];
  subBtn=false;
  editbtn=false;
  selectobj:any;
  searchitem='';
  
  modalRef: BsModalRef;
  config: ModalOptions = {
    backdrop: true, 
    keyboard: false, 
    ignoreBackdropClick: true, 
    animated: true, 
  };
  
  constructor(private modalService: BsModalService , private FormBuilder:FormBuilder , private toastr: ToastrService ,private ngxService: NgxUiLoaderService) { 
    this.notIntrestedForm=this.FormBuilder.group({
      name:['',[Validators.required]],
      email:['',[Validators.required ,Validators.email]],
      mobile:['',[Validators.required ,Validators.maxLength(10)]],
      Status:['',[Validators.required]]
    })

    let data= localStorage.getItem("notIntrestCandidate_LIST");
    if(data){
      this.notIntrestedcandidatelist=JSON.parse(data);
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
    if(this.notIntrestedForm.valid){
    
     this.closeModal();
      this.ngxService.start(); 
      setTimeout(() => {
        this.notIntrestedForm.value.id=this.randomID();
    this.notIntrestedcandidatelist.push(this.notIntrestedForm.value);
    localStorage.setItem("notIntrestCandidate_LIST" , JSON.stringify(this.notIntrestedcandidatelist));
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
    if(this.notIntrestedForm.valid){
    this.editbtn=false;
    this.closeModal();
   this.ngxService.start(); 
   setTimeout(() => {
    this.notIntrestedcandidatelist[this.selectobj].name=this.notIntrestedForm.value.name; 
    this.notIntrestedcandidatelist[this.selectobj].email=this.notIntrestedForm.value.email; 
    this.notIntrestedcandidatelist[this.selectobj].mobile=this.notIntrestedForm.value.mobile; 
    this.notIntrestedcandidatelist[this.selectobj].Status=this.notIntrestedForm.value.Status; 

    localStorage.setItem("notIntrestCandidate_LIST" , JSON.stringify(this.notIntrestedcandidatelist));
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


  edit(obj:any , template: TemplateRef<any>){
    this.editbtn=true;

    
    this.ngxService.start(); 
    setTimeout(() => {
      this.modalRef = this.modalService.show(template, this.config);

      this.ngxService.stop(); 
    }, 2000);
    this.selectobj=this.notIntrestedcandidatelist.findIndex((x: any) => x.id === obj.id);
      this.notIntrestedForm.patchValue({
        name:obj.name,
        email:obj.email,
        mobile:obj.mobile,
        Status:obj.Status
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
        this.ngxService.start(); 
        setTimeout(() => {
          this.selectobj=this.notIntrestedcandidatelist.findIndex((x: any) => x.id === id);
          this.notIntrestedcandidatelist.splice(this.selectobj,1);
      localStorage.setItem("notIntrestCandidate_LIST" , JSON.stringify(this.notIntrestedcandidatelist));
      Swal.fire(
          
        'Deleted!',
        'Your file has been deleted.',
        'success'
        
      )
      this.toastr.success('Successfully!', 'Entry Deleted !');

          this.ngxService.stop(); 
        }, 2000);
       
        
      }
    })
    

  }
 randomID() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

  get f(){
    return this.notIntrestedForm.controls;
  }

  clear(){
    this.notIntrestedForm.reset();
  }
}

