import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.scss']
})
export class PositionComponent implements OnInit {
  modalRef: BsModalRef;
  config: ModalOptions = {
    backdrop: true, //backgroud color as dark
    keyboard: false, //Close on Esc button
    ignoreBackdropClick: true, //Close on outside click
    animated: true, //Add animation on open close
  };
  isUpdate = false;
employeeList : any = [];
  selectIndex:any;
  searchKey = '';
  employeeForm : FormGroup;
  dataSub = false;
  loaDing = false;
  emp = ['Select','Fresher','Junior Software Engineer', 'Senior Software Engineer'];
    technoBox: string = 'Select';
  
  constructor(private FormBuilder: FormBuilder,private modalService: BsModalService,private ngxService: NgxUiLoaderService,private toastr: ToastrService) {
    this.employeeForm = FormBuilder.group({
      employeePosition : ['',[Validators .required]],
      employeeType:''
    })
    let data1 = localStorage.getItem('EMPLOYEE');
    if(data1){
      this.employeeList = JSON.parse(data1);
    }

   }

  ngOnInit(): void {
  }
 openModal(template: TemplateRef<any>) {
  this.ngxService.start();

  setTimeout(() => {  
    this.ngxService.stop();
    this.modalRef = this.modalService.show(template, this.config);
  }, 1000);
  }

  closeModal() {
    this.modalRef.hide();
  }

  Submit(){
  this.dataSub = true;

  if (this.employeeForm.valid){
 this.closeModal();
   
    this.ngxService.start();

    setTimeout(() => {  
      this.ngxService.stop();
      this.employeeForm.value.id = this.randomID();
      this.employeeList.push(this.employeeForm.value)
      localStorage.setItem("EMPLOYEE", JSON.stringify(this.employeeList));
      console.log('table', this.employeeList);
     
      this.employeeClear()
      Swal.fire(
        'Submitted',
        'Your file has been Submitted Sucessfully.',
        'success'
      )
    }, 2000);
   
}
else {
  this.toastr.warning('Warning', 'Invalid!');
 }

}

Edit(obj:any , template: TemplateRef<any>){
  this.toastr.info('Your Response', 'Edit');

    this.modalRef = this.modalService.show(template, this.config);
  this.selectIndex= this.employeeList.findIndex((x : any )=> x.id === obj.id);
  this.employeeForm.patchValue({
    employeePosition : obj.employeePosition ,
    employeeType: obj.employeeType
  })

      this.isUpdate = true;
}

Update(){
 
  this.closeModal();
    this.ngxService.start();
    setTimeout(() => { 
      this.employeeList[this.selectIndex].employeePosition = this.employeeForm.value.employeePosition;
      this.employeeList[this.selectIndex].employeeType = this.employeeForm.value.employeeType;
      localStorage.setItem("EMPLOYEE", JSON.stringify(this.employeeList));
      this.employeeClear()
      this.ngxService.stop();
      this.isUpdate = false ;
      Swal.fire(
        'Updated',
        'Your file has been Updated Sucessfully.',
        'success'
      )
    }, 2000);
}

Delete(id:any){

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
      this.selectIndex= this.employeeList.findIndex((x : any )=> x.id === id);    
      this.employeeList.splice(this.selectIndex,1);
      localStorage.setItem("EMPLOYEE", JSON.stringify(this.employeeList));
      }, 2000);
    
    }
  }) 
}

employeeClear(){
this.employeeForm.reset();
}


randomID()
{
return '_' + Math.random().toString(36).substr(2, 9);
}


get t(){
  return this.employeeForm.controls
}


}
