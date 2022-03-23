import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  modalRef: BsModalRef;
  config: ModalOptions = {
    backdrop: true, //backgroud color as dark
    keyboard: false, //Close on Esc button
    ignoreBackdropClick: true, //Close on outside click
    animated: true, //Add animation on open close

  };

  empForm: FormGroup;
  empList:any=[];
  courseSubmit = false;
  selectedIndex="";
  selectedObj="";
  forLoginsuccess=false;
  // submitted="";

  searchBar="";
  // currentPage="";
  totalItems = 64;
  currentPage = 4;
 
 
  

  // firstName="";
  // lastName="";
  // no="";
  // email="";
  // dateofBirth="";
  // gender="";
  // qualifications="";
  // address="";



  constructor(private modalService: BsModalService, private formbuilder: FormBuilder, private ngxService: NgxUiLoaderService
    ,private toastr: ToastrService) {
    this.empForm = this.formbuilder.group({
    firstName : ['',[Validators.required]],
     lastName :['',[Validators.required]],
     no :['',[Validators.maxLength(10)]],
     email :['',[Validators.email]],
     dateofBirth :['',[Validators.required]],
     gender :['',[Validators.required]],
     qualifications :['',[Validators.required]],
     address :['',[Validators.required]]
    })

    let data =  localStorage.getItem('emp_LIST')

  if (data)
  {
    this.empList = JSON.parse(data);
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
    this.courseSubmit = true;

  if (this.empForm.valid){
 this.closeModal();
   
    this.ngxService.start();

    setTimeout(() => {  
      this.ngxService.stop();
      this.empForm.value.id = this.randomID();
      this.empList.push(this.empForm.value)
      localStorage.setItem("emp_LIST", JSON.stringify(this.empList));
      console.log('table', this.empList);
     
      // this.technoClear()
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
    
    // this.courseSubmit = true;
    

    // if(this.empForm.valid){
    //   this.ngxService.start();
    //   localStorage.setItem("emp_LIST", JSON.stringify(this.empList));
    //   setTimeout(() => {
    //     this.ngxService.stop();
    //     this.empForm.value.id = this.randomID();
    //     this.empList.push(this.empForm.value);
      
      
      
  
    //   this.toastr.success('Hello world!', 'Toastr fun!');
    //   }, 2000);
       
        
      
    //   let ref = document.getElementById('cancel');
    //   ref?.click();
    //   this.empForm.reset();
    // }
    
    // else{
    //   alert("form is not-valid try again")
    // }
    
  }

  active(){
    console.log("you clicked on active");
  }

  delte(id:any){
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
    console.log("You Clicked on delete");
    this.selectedIndex=this.empList.findIndex((x:any)=>x.id===id);
    
    console.log("this.selectedIndex",this.selectedIndex);
    this.empList.splice(this.selectedIndex,1)
    localStorage.setItem("emp_LIST", JSON.stringify(this.empList));
    this.toastr.success('Successfully', 'Deleted');
      }, 2000);
    // alert("Deleted Successfully");
  
}
}) 

}

  edit(obj:any){
    this.forLoginsuccess=true;
    // this.ngxService.start();
    // setTimeout(() => {  
    //   this.ngxService.stop();
    //   this.modalRef = this.modalService.show(template, this.config);
    //   this.toastr.info('Your Response', 'Edit');
    // }, 2000);
    // this.selectedIndex = this.empList.findIndex((x:any)=> x.id = obj.id)
    // this.empForm.controls['firstName'].setValue(emp.firstName);
    // this.empForm.controls['lastName'].setValue(emp.lastName);
    // this.empForm.controls['no'].setValue(emp.no);
    // this.empForm.controls['email'].setValue(emp.email);
    // this.empForm.controls['dateofBirth'].setValue(emp.dateofBirth);
    // this.empForm.controls['gender'].setValue(emp.gender);
    // this.empForm.controls['qualifications'].setValue(emp.qualifications);
    // this.empForm.controls['address'].setValue(emp.address);
    this.selectedIndex = this.empList.findIndex((x:any)=>x.id===obj.id);
    console.log('this.selectedIndex',this.selectedIndex)
    this.selectedObj = obj;
    this.empForm.patchValue({
      firstName:obj.firstName,
      lastName:obj.lastName,
      no:obj.no,
      email:obj.email,
      dateofBirth:obj.dateofBirth,
      gender:obj.gender,
      qualifications:obj.qualifications,
      address:obj.address,
     
     })
   
    }

  update(){
    this.courseSubmit = false;
    this.ngxService.start();
    setTimeout(() => {
    this.ngxService.stop();
    this.empList[this.selectedIndex].firstName = this.empForm.value.firstName;
    this.empList[this.selectedIndex].lastName = this.empForm.value.lastName;
    this.empList[this.selectedIndex].no = this.empForm.value.no;
    this.empList[this.selectedIndex].email = this.empForm.value.email;
    this.empList[this.selectedIndex].dateofBirth = this.empForm.value.dateofBirth;
    this.empList[this.selectedIndex].gender = this.empForm.value.gender;
    this.empList[this.selectedIndex].qualifications = this.empForm.value.qualifications;
    this.empList[this.selectedIndex].address = this.empForm.value.address;

    localStorage.setItem("emp_LIST", JSON.stringify(this.empList));
    this.toastr.success('Successfully', 'updated');
    console.log("for update data",this.empList);
  }, 2000);
    // alert("updated succcessfully")
    this.closeModal()
  }

  datePicker(){
    
  }

  get f(){
    return this.empForm.controls;
  }

  randomID(){
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  startSpinner(){
    this.ngxService.start();
    setTimeout(() => {
      this.ngxService.stop();
    }, 2000);
  }

  // showSuccessToaster(){
  //   this.toastr.success('Hello world!', 'Toastr fun!');
  // }

  // showInfoToaster(){
  //   this.toastr.info('Hello world!', 'Toastr fun!');
  // }

  // showWarningToaster(){
  //   this.toastr.warning('Hello world!', 'Toastr fun!');
  // }

  // showErrorToaster(){
  //   this.toastr.error('Hello world!', 'Toastr fun!');
  // }

  }

