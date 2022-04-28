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
 
  modalRef: BsModalRef;
  config: ModalOptions = {
    backdrop: true, //backgroud color as dark
    keyboard: false, //Close on Esc button
    ignoreBackdropClick: true, //Close on outside click
    animated: true, //Add animation on open close
  };
 
  positionList:any = [];
  positionData:FormGroup;
  newID ='';
  newIndex = '';
  // subBtn=false;
  // editbtn=false;
  // selectobj:any;
  // searchitem='';
//   isUpdate = false;
// employeeList : any = [];
//   selectIndex:any;
//   searchKey = '';
//   employeeForm : FormGroup;
//   dataSub = false;
//   loaDing = false;
//   types=['Fresher','Junior Software Engineer','Senior Software Engineer'] 

   constructor(private FormBuilder: FormBuilder,private modalService: BsModalService,private ngxService: NgxUiLoaderService,private toastr: ToastrService,private http: HttpClient) {
    this.positionData=this.FormBuilder.group({
      positionID:"",
      positionName:"",
      positionStatus:""
    
    })
  }
    // let data= localStorage.getItem("Employee_LIST");
    // if(data){
    //   this.employeeList=JSON.parse(data);
    // }
 
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
  this.getAllposition();
  }
     getAllposition() {
    this.http.get("https://hrms-dev-server.herokuapp.com/api/position").subscribe(
        (response: any) => {
          this.positionList = response.data;
        },
        (error) => {
          console.log("error", error);
        }
      );
  }

  openModal(template: TemplateRef<any>) {
   
    this.modalRef = this.modalService.show(template, this.config);
    

  }
 // this.subBtn=false;
    // this.clear();
 Submit() {
    this.http.post("https://hrms-dev-server.herokuapp.com/api/position",this.positionData.value).subscribe(
        (response: any) => {
          this.getAllposition();
        },
        (error) => {
          console.log("error", error);
        }
      );
      this.positionData.reset();
    this.modalRef.hide();
  }

    // this.subBtn=true;
    // if(this.employeeForm.valid){
    
    //  this.closeModal();
    //   this.ngxService.start(); 
    //   setTimeout(() => {
    //     this.employeeForm.value.id=this.randomID();
    // this.employeeList.push(this.employeeForm.value);
    // localStorage.setItem("Employee_LIST" , JSON.stringify(this.employeeList));
    //   this.clear();
    //   this.toastr.success('Submitted Successfully!', 'Details Valid!');

    //     this.ngxService.stop(); 
    //   }, 2000);
     
    // }else {
    //    this.toastr.error("Please try again..!", "Invalid  Data !");
    //     }
      
  // }


 

  // obj:any , template: TemplateRef<any>
  Edit(i,_id,template1){
    this.newID = _id;
    this.newIndex = i;
    this.modalRef = this.modalService.show(template1, this.config);
    this.positionData.patchValue({
      positionID: this. positionList[i]. positionID,
      positionName: this.positionList[i].positionName,
      positionStatus: this.positionList[i].positionStatus
    })
    console.log("edit");
    
  }
  // this.editbtn=true;   
    //       this.modalRef = this.modalService.show(template, this.config);      
    // this.selectobj=this.employeeList.findIndex((x: any) => x.id === obj.id);
    //   this.employeeForm.patchValue({
    //     employeePosition:obj.employeePosition,
    //     type:obj.type
      // })
  Update(){
    this.http.put("https://hrms-dev-server.herokuapp.com/api/position"+this.newID,this.positionData).subscribe(
      (response: any) => {
        this.getAllposition();
      },
      (error) => {
        console.log("error", error);
      }
    );
    this.positionData.reset();
  this.modalRef.hide();
  }
  //   this.subBtn=true;
  //   if(this.employeeForm.valid){
  //   this.editbtn=false;
  //   this.closeModal();
  //  this.ngxService.start(); 
  //  setTimeout(() => {
  //   this.employeeList[this.selectobj].employeePosition=this.employeeForm.value.employeePosition; 
  //  this.employeeList[this.selectobj].type=this.employeeForm.value.type; 

  //   localStorage.setItem("Employee_LIST" , JSON.stringify(this.employeeList));
  //   this.toastr.success('Updated Successfully!', 'Details Valid!');
    
  //   this.clear();
  //    this.ngxService.stop(); 
  //  }, 2000);
  // }else {
  //   this.toastr.error("Please try again..!", "Invalid  Data !");
  //    }
   
  
  // }

  Delete(_id){
    this.http.delete("https://hrms-dev-server.herokuapp.com/api/position"+_id).subscribe(
      (response: any) => {
        this.getAllposition();
      },
      (error) => {
        console.log("error", error);
      }
    );
  }
 
  closeModal() {
    this.modalRef.hide();

  }
    // this.editbtn=false;
    
    // Swal.fire({
    //   title: 'Are you sure?',
    //   text: "You won't be able to revert this!",
    //   icon: 'warning',
    //   allowEscapeKey: false,
    //   allowOutsideClick: false,
    //   confirmButtonColor: '#3085d6',
    //   confirmButtonText: 'Yes, delete it!',
    //   showCancelButton: true,
    //   cancelButtonColor: '#d33',
    //   cancelButtonText:'Cancle'
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     this.ngxService.start(); 
    //     setTimeout(() => {
    //       this.selectobj=this.employeeList.findIndex((x: any) => x.id === id);
    //       this.employeeList.splice(this.selectobj,1);
    //   localStorage.setItem("Employee_LIST" , JSON.stringify(this.employeeList));
    //   Swal.fire(
          
    //     'Deleted!',
    //     'Your file has been deleted.',
    //     'success'
        
    //   )
    //   this.toastr.success('Successfully!', 'Entry Deleted !');

    //       this.ngxService.stop(); 
    //     }, 2000);
       
        
    //   }
    // })
    

  // }
//  randomID() {
//   return '_' + Math.random().toString(36).substr(2, 9);
// }

//   get f(){
//     return this.employeeForm.controls;
//   }

//   clear(){
//     this.employeeForm.reset();
//   }
// }


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
}