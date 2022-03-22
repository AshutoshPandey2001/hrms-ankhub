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
  emp = ['Select','Fresher','Junior Software Engineer', 'Senior Software Engineer'];
    employee: string = 'Select';
  employeeForm:FormGroup;
  employeearray:any=[];
  selectindex:any;
  editbtn=false;
  subBtn=false;
  modalRef: BsModalRef;
  config: ModalOptions = {
    backdrop: true, //backgroud color as dark
    keyboard: false, //Close on Esc button
    ignoreBackdropClick: true, //Close on outside click
    animated: true, //Add animation on open close
  };
  Search:any;
  order: string ='name';
  
  page: number = 1;
  constructor(private FormBuilder: FormBuilder,private modalService: BsModalService,private ngxService: NgxUiLoaderService,private toastr: ToastrService) {
    this.employeeForm= FormBuilder.group({
      idd:['', [Validators.required]],
      name:['', [Validators.required]],
      employee:'',
    })
    let data= localStorage.getItem("TABLE_LIST")
    if(data){
      this.employeearray=JSON.parse(data);
    }
   }

  ngOnInit(): void {
  }
  Submit()
    {
      this.ngxService.start(); 
      setTimeout(() => {
        this.ngxService.stop();   this.subBtn=true;
        if(this.employeeForm.valid){
          console.log('form value', this.employeeForm.value)
          this.employeeForm.value.id=this.randomID();
          this.employeearray.push(this.employeeForm.value);
          localStorage.setItem("TABLE_LIST" , JSON.stringify(this.employeearray));
          console.log('array', this.employeearray);
          Swal.fire(
            'Submitted',
            'Your file has been Submitted Sucessfully.',
            'success'
          )
          this.clear();
          this.modalRef.hide();
        }else{
        {
            this.toastr.warning( 'Please Enter Correct Details','Warning!');
          }
        }
      }, 2000);
    }
  
   


  Update1(){
    this.subBtn=true;
    if(this.employeeForm.valid){
this.editbtn=false;
this.employeearray[this.selectindex].idd=this.employeeForm.value.idd;
this.employeearray[this.selectindex].name=this.employeeForm.value.name;
this.employeearray[this.selectindex].employee=this.employeeForm.value.country;
localStorage.setItem("TABLE_LIST" , JSON.stringify(this.employeearray));
this.clear();
this.modalRef.hide();
}else{
  alert("Please Enter Correct Details")
}
  }

  edit(obj:any){
    this.editbtn=true;
    this.selectindex=this.employeearray.findIndex((x: any) => x.id === obj.id);
    this.employeeForm.patchValue({
      idd:obj.idd,
      name:obj.name,
      employee:obj.employee,
    })
  }
  delete(id:any)
    {
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
              this.ngxService.stop(); 
            this.selectindex=this.employeearray.findIndex((x: any) => x.id === id);
        this.employeearray.splice(this.selectindex,1);
        localStorage.setItem("TABLE_LIST" , JSON.stringify(this.employeearray));
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            },  2000);
          }
        })
        
     
     
    }    

  
  get f(){
    return this.employeeForm.controls;
  }
  clear(){
    this.employeeForm.reset();
  }
  randomID() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }
  openModal(template: TemplateRef<any>) {
    this.ngxService.start(); 
    setTimeout(() => {
      this.ngxService.stop();
      this.modalRef = this.modalService.show(template, this.config);
    }, 200);
   
  }

  closeModal() {
    this.modalRef.hide();
  }

}
