import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService, ModalOptions } from "ngx-bootstrap/modal";
import { NgxUiLoaderService } from 'ngx-ui-loader';
import Swal from 'sweetalert2'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {
  modalRef: BsModalRef;
  config: ModalOptions = {
    backdrop: true, //backgroud color as dark
    keyboard: false, //Close on Esc button
    ignoreBackdropClick: true, //Close on outside click
    animated: true, //Add animation on open close
  };


  isUpdate = false;
  technoList : any = [];
  selectIndex:any;
  searchKey = '';
  technoForm : FormGroup;
  dataSub = false;
  loaDing = false;



  
  constructor(private formbuilder:FormBuilder ,private modalService: BsModalService , private ngxService: NgxUiLoaderService , private toastr: ToastrService) {
    
    this.technoForm = formbuilder.group({
      technoText : ['',[Validators .required]],
   
    })

    let data1 = localStorage.getItem('TECHNOLOGY');
    if(data1){
      this.technoList = JSON.parse(data1);
    }

    }

  ngOnInit(): void {}


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  closeModal() {
    this.modalRef.hide();
  }

  submitData(){
  this.dataSub = true;

  if (this.technoForm.valid){
 this.closeModal();
   
    this.ngxService.start();

    setTimeout(() => {  
      this.ngxService.stop();
      this.technoForm.value.id = this.randomID();
      this.technoList.push(this.technoForm.value)
      localStorage.setItem("TECHNOLOGY", JSON.stringify(this.technoList));
      console.log('table', this.technoList);
     
      this.technoClear()
      this.toastr.success('sucessfully', 'Submitted');
    }, 2000);
   
}
else {
 
  Swal.fire(
    'Invalid!',
    'please try again !!!.',
    'warning'
  )
 }

}

editData(obj:any , template: TemplateRef<any>){



  this.selectIndex= this.technoList.findIndex((x : any )=> x.id === obj.id);
  this.technoForm.patchValue({
    technoText : obj.technoText ,
   
  })

      this.isUpdate = true;
}

updateData(){
 
  this.closeModal();
    this.ngxService.start();
    setTimeout(() => { 
      this.technoList[this.selectIndex].technoText = this.technoForm.value.technoText;
      localStorage.setItem("TECHNOLOGY", JSON.stringify(this.technoList));
      this.technoClear()
      this.ngxService.stop();
      this.isUpdate = false ;
      this.toastr.success('Successfully', 'Updated');
    }, 2000);
}

deleteData(id:any){

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
 
        setTimeout(() => {  
        Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      ) 
    }, 1000);
   
      this.ngxService.stop();
      this.selectIndex= this.technoList.findIndex((x : any )=> x.id === id);    
      this.technoList.splice(this.selectIndex,1);
      localStorage.setItem("TECHNOLOGY", JSON.stringify(this.technoList));
      this.toastr.success('Successfully', 'Deleted');
      }, 2000);
    
    }
  }) 
}


technoClear(){
this.technoForm.reset();
}


randomID()
{
return '_' + Math.random().toString(36).substr(2, 9);
}


get t(){
  return this.technoForm.controls
}




}
