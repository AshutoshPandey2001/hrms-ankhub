import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.scss']
})
export class PositionComponent implements OnInit {
  employeeForm:FormGroup;
  employeeList:any=[''];
  subBtn=false;
  editbtn=false;
  selectobj:any;
  searchitem='';
  modalRef: BsModalRef;
  config: ModalOptions = {
    backdrop: true, //backgroud color as dark
    keyboard: false, //Close on Esc button
    ignoreBackdropClick: true, //Close on outside click
    animated: true, //Add animation on open close
  };
//   isUpdate = false;
// employeeList : any = [];
//   selectIndex:any;
//   searchKey = '';
//   employeeForm : FormGroup;
//   dataSub = false;
//   loaDing = false;
//   types=['Fresher','Junior Software Engineer','Senior Software Engineer'] 

   constructor(private FormBuilder: FormBuilder,private modalService: BsModalService,private ngxService: NgxUiLoaderService,private toastr: ToastrService,private http: HttpClient) {
    // this.employeeForm=this.FormBuilder.group({
    //   PositionID:['',[Validators.required]],
    //   positionName:['',[Validators.required]],
    //   positionStatus:['',[Validators.required]]
    this.employeeForm = FormBuilder.group({
            employeePosition : ['',[Validators .required]],
            type:['',[Validators .required]]
    })
    let data= localStorage.getItem("Employee_LIST");
    if(data){
      this.employeeList=JSON.parse(data);
    }
  }
//     this.employeeForm = FormBuilder.group({
//       employeePosition : ['',[Validators .required]],
//       type:['',[Validators .required]]
//     })
//     let data1 = localStorage.getItem('EMPLOYEE');
//     if(data1){
//       this.employeeList = JSON.parse(data1);
//     }

//    }

 ngOnInit(): void {
  // this.getAllemployee();
  }
  // getAllemployee() {
  //   this.http.get("https://hrms-dev-server.herokuapp.com/api/position").subscribe(
  //       (response: any) => {
  //         this.employeeList = response.data;
  //       },
  //       (error) => {
  //         console.log("error", error);
  //       }
  //     );
  // }

  openModal(template: TemplateRef<any>) {
    this.subBtn=false;
    this.clear();
    this.modalRef = this.modalService.show(template, this.config);

  }

  closeModal() {
    this.modalRef.hide();
    this.editbtn=false;
    
  }


  Submit() {
    this.subBtn=true;
    if(this.employeeForm.valid){
    
     this.closeModal();
      this.ngxService.start(); 
      setTimeout(() => {
        this.employeeForm.value.id=this.randomID();
    this.employeeList.push(this.employeeForm.value);
    localStorage.setItem("Employee_LIST" , JSON.stringify(this.employeeList));
      this.clear();
      this.toastr.success('Submitted Successfully!', 'Details Valid!');

        this.ngxService.stop(); 
      }, 2000);
     
    }else {
       this.toastr.error("Please try again..!", "Invalid  Data !");
        }
      
  }


  Update(){
    this.subBtn=true;
    if(this.employeeForm.valid){
    this.editbtn=false;
    this.closeModal();
   this.ngxService.start(); 
   setTimeout(() => {
    this.employeeList[this.selectobj].employeePosition=this.employeeForm.value.employeePosition; 
   this.employeeList[this.selectobj].type=this.employeeForm.value.type; 

    localStorage.setItem("Employee_LIST" , JSON.stringify(this.employeeList));
    this.toastr.success('Updated Successfully!', 'Details Valid!');
    
    this.clear();
     this.ngxService.stop(); 
   }, 2000);
  }else {
    this.toastr.error("Please try again..!", "Invalid  Data !");
     }
   
  
  }


  Edit(obj:any , template: TemplateRef<any>){
    this.editbtn=true;   
          this.modalRef = this.modalService.show(template, this.config);      
    this.selectobj=this.employeeList.findIndex((x: any) => x.id === obj.id);
      this.employeeForm.patchValue({
        employeePosition:obj.employeePosition,
        type:obj.type
      })
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
          this.selectobj=this.employeeList.findIndex((x: any) => x.id === id);
          this.employeeList.splice(this.selectobj,1);
      localStorage.setItem("Employee_LIST" , JSON.stringify(this.employeeList));
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
    return this.employeeForm.controls;
  }

  clear(){
    this.employeeForm.reset();
  }
}


//   url="./assets/img/img_avatar.png"
//   onselectFile(a){
//     if(a.target.files)
//   {
//     var reader = new FileReader();
//     reader.readAsDataURL(a.target.files[0])
//     reader.onload=(event:any)=>{
//       this.url=event.target.result;
//     }
//   }
//   }
//  openModal(template: TemplateRef<any>) {
// this.modalRef = this.modalService.show(template, this.config);
//   }

//   closeModal() {
//     this.modalRef.hide();
  
//   }

//   Submit(){
//   this.dataSub = true;

//   if (this.employeeForm.valid){
//  this.closeModal();
   
//     this.ngxService.start();

//     setTimeout(() => {  
//       this.ngxService.stop();
//       this.employeeForm.value.id = this.randomID();
//       this.employeeList.push(this.employeeForm.value)
//       localStorage.setItem("EMPLOYEE", JSON.stringify(this.employeeList));
//       console.log('table', this.employeeList);
     
//       this.employeeClear()
//       this.toastr.success("Thank you !", "Your Data is Submitted Sucessfully..!");
//     }, 2000);
   
// }
// else {
//   this.toastr.error("Please try again..!", "Invalid  Data !");
//  }

// }

// Edit(obj:any , template: TemplateRef<any>){
//     this.modalRef = this.modalService.show(template, this.config);
//   this.selectIndex= this.employeeList.findIndex((x : any )=> x.id === obj.id);
//   this.employeeForm.patchValue({
//     employeePosition : obj.employeePosition ,
//     type: obj.type
//   })

//       this.isUpdate = true;
// }

// Update(){
 
//   this.closeModal();
//     this.ngxService.start();
//     setTimeout(() => { 
//       this.employeeList[this.selectIndex].employeePosition = this.employeeForm.value.employeePosition;
//       this.employeeList[this.selectIndex].type = this.employeeForm.value.type;
//       localStorage.setItem("EMPLOYEE", JSON.stringify(this.employeeList));
//       this.employeeClear()
//       this.ngxService.stop();
//       this.isUpdate = false ;
    
//       this.toastr.success("Thank you !", "Your Data is Updated Sucessfully..!");
      
//     }, 2000);
// }

// Delete(id:any){

//   Swal.fire({
//     title: 'Are you sure?',
//     text: "You won't be able to revert this!",
//     icon: 'warning',
//     allowEscapeKey: false,
//     allowOutsideClick: false,
//     confirmButtonColor: '#3085d6',
//     confirmButtonText: 'Yes, delete it!',
//     showCancelButton: true,
//     cancelButtonColor: '#d33',
//     cancelButtonText:'Cancle'
//   }).then((result) => {
//     if (result.isConfirmed) {
//       this.ngxService.start();
//       setTimeout(() => {  
 
//         setTimeout(() => {  
//         Swal.fire("Deleted!", "Your file has been deleted.", "success");
//           this.toastr.success(" Deleted Sucessfully..!");
//     }, 1000);
   
//       this.ngxService.stop();
//       this.selectIndex= this.employeeList.findIndex((x : any )=> x.id === id);    
//       this.employeeList.splice(this.selectIndex,1);
//       localStorage.setItem("EMPLOYEE", JSON.stringify(this.employeeList));
//       }, 2000);
    
//     }
//   }) 
// }

// employeeClear(){
// this.employeeForm.reset();
// }


// randomID()
// {
// return '_' + Math.random().toString(36).substr(2, 9);
// }


// get t(){
//   return this.employeeForm.controls
// }


// }
