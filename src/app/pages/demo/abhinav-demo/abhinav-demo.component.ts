import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-abhinav-demo',
  templateUrl: './abhinav-demo.component.html',
  styleUrls: ['./abhinav-demo.component.scss']
})
export class AbhinavDemoComponent implements OnInit {

 

  isupdateA = false ;
  searchkey = '';
  empList : any = [];
  selectIndex:any;

  isupdateB = false;
  tableList : any = [];
  selectIndexB:any;
  searchkeyB = '';
  tableForm : FormGroup;
  tablesub = false;
  loading = false;
modelClose = false

  empForm : FormGroup;
  empsub = false;

    constructor(private formbuilder:FormBuilder) {
      this.empForm = formbuilder.group({
        empName : ['',[Validators .required , Validators.minLength(8)]],
        salary : ['',[Validators.required , Validators.minLength(5)]]
      })

      this.tableForm = formbuilder.group({
        fName : ['',[Validators .required]],
        email : ['',[Validators .email]],
        mobNo : ['',[Validators.minLength(10),Validators.maxLength(10)]],
        dob : ['',[Validators .required]],
        gender : ['',[Validators .required ]],
        quali : ['']
     
      })

      let data = localStorage.getItem('Employee_LIST');
      if(data){
        this.empList = JSON.parse(data);
      }

      let data1 = localStorage.getItem('Table_LIST');
      if(data1){
        this.tableList = JSON.parse(data1);
      }

      }
  
  
    ngOnInit(): void {
    }
  
    empSubmit(){
  this.empsub = true;
  
  
  if (this.empForm.valid){
    this.empForm.value.id = this.randomID();
    this.empList.push(this.empForm.value)
    
    alert("Form is valid......submitted successfully !!!")
    localStorage.setItem("Employee_LIST", JSON.stringify(this.empList));
    console.log('Employee', this.empList);
    
    this.empClear()
  }
  else {
   alert("Form is invalid......please try again !!!")
  }
    }
  
    get f(){
      return this.empForm.controls
    }
  
  
  
  
  
  empEdit(obj:any){
    this.selectIndex= this.empList.findIndex((x : any )=> x.id === obj.id);
  
    this.isupdateA = true;
    this.empForm.patchValue({
      empName : obj.empName ,
      salary : obj.salary
    })
   
   
  }
  
  empUpdate(){
    this.empList[this.selectIndex].empName = this.empForm.value.empName;
    this.empList[this.selectIndex].salary = this.empForm.value.salary;
    localStorage.setItem("Employee_LIST", JSON.stringify(this.empList));
    this.empClear()
    this.isupdateA = false ;
    alert("Updated successfully")
  }
  
  empDelete(id:any){
    this.selectIndex= this.empList.findIndex((x : any )=> x.id === id);
  
    this.empList.splice(this.selectIndex,1);
    localStorage.setItem("Employee_LIST", JSON.stringify(this.empList));
  }
  
  empClear(){
  this.empForm.reset();
  }
  
 

tableSubmit(){
  this.tablesub = true;
  this.modelClose = true;
  
  if (this.tableForm.valid){
    this.tableForm.value.id = this.randomID();
    this.tableList.push(this.tableForm.value)
    this.loading = true;

    setTimeout(() => {  
      this.loading = false;
      const type = ['','success'];

      const color = Math.floor((Math.random() * 1) + 1);
    
      $.notify({
          icon: "notifications",
          message: "Your response is <b>Submitted successfully</b>"
    
      },{
          type: type[color],
          timer: 4000 ,
          placement: {
              from: 'top',
              align: 'right'
          },
          template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
            '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
            '<i class="material-icons" data-notify="icon">notifications</i> ' +
            '<span data-notify="title">{1}</span> ' +
            '<span data-notify="message">{2}</span>' +
            '<div class="progress" data-notify="progressbar">' +
              '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
            '</div>' +
            '<a href="{3}" target="{4}" data-notify="url"></a>' +
          '</div>'
      });
     
    }, 5000);
  
  

    // alert("Form is valid......submitted successfully !!!")
    localStorage.setItem("Table_LIST", JSON.stringify(this.tableList));
    console.log('table', this.tableList);
   
    this.tableClear()
}
else {
  alert("Form is invalid......please try again !!!")
 }

}

tableEdit(obj:any){
  this.loading = true;
  setTimeout(() => {  
    this.loading = false;

    const type = ['','warning'];

    const color = Math.floor((Math.random() * 1) + 1);
  
    $.notify({
        icon: "notifications",
        message: "Your can <b>Edit</b> your response"
  
    },{
        type: type[color],
        timer: 4000 ,
        placement: {
            from: 'bottom',
            align: 'left'
        },
        template: '<div data-notify="container" class=" col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
          '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
          '<i class="material-icons" data-notify="icon">notifications</i> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
            '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          '</div>' +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>'
    });
  }, 5000);

  
  this.selectIndexB= this.tableList.findIndex((x : any )=> x.id === obj.id);
 
  
  this.tableForm.patchValue({
    fName : obj.fName ,
    email : obj.email,
    mobNo : obj.mobNo,
    dob : obj.dob,
    gender : obj.gender,
    quali : obj.quali
  })




  
      this.isupdateB = true;
  
}

tableUpdate(){
  this.tableList[this.selectIndexB].fName = this.tableForm.value.fName;
  this.tableList[this.selectIndexB].email = this.tableForm.value.email;
  this.tableList[this.selectIndexB].mobNo = this.tableForm.value.mobNo;
  this.tableList[this.selectIndexB].dob = this.tableForm.value.dob;
  this.tableList[this.selectIndexB].gender = this.tableForm.value.gender;
  this.tableList[this.selectIndexB].quali = this.tableForm.value.quali;
    localStorage.setItem("Table_LIST", JSON.stringify(this.tableList));
    this.tableClear()
    this.isupdateB = false ;
    this.loading = true;
    setTimeout(() => {  
      this.loading = false;
      const type = ['','info'];

      const color = Math.floor((Math.random() * 1) + 1);
    
      $.notify({
          icon: "notifications",
          message: " Your Information is <b>Updated </b>"
    
      },{
          type: type[color],
          timer: 4000 ,
          placement: {
              from: 'top',
              align: 'left'
          },
          template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
            '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
            '<i class="material-icons" data-notify="icon">notifications</i> ' +
            '<span data-notify="title">{1}</span> ' +
            '<span data-notify="message">{2}</span>' +
            '<div class="progress" data-notify="progressbar">' +
              '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
            '</div>' +
            '<a href="{3}" target="{4}" data-notify="url"></a>' +
          '</div>'
      });
    }, 5000);
  
    
}

tableDelete(id:any){

  if(confirm('You want to Delete info ?')==true){
    this.loading = true;
  setTimeout(() => {  
    this.loading = false;


    const type = ['','danger'];

    const color = Math.floor((Math.random() * 1) + 1);
  
    $.notify({
        icon: "notifications",
        message: "Your response is <b>Deleted</b> "
  
    },{
        type: type[color],
        timer: 4000 ,
        placement: {
            from: 'bottom',
            align: 'right'
        },
        template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
          '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
          '<i class="material-icons" data-notify="icon">notifications</i> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
            '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          '</div>' +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>'
    });
     
  }, 5000);
  this.selectIndexB= this.tableList.findIndex((x : any )=> x.id === id);
 
  this.tableList.splice(this.selectIndexB,1);
  localStorage.setItem("Table_LIST", JSON.stringify(this.tableList));

 

  
 }

 else{
  this.loading = true;
  setTimeout(() => {  
    this.loading = false;


    const type = ['','danger'];

    const color = Math.floor((Math.random() * 1) + 1);
  
    $.notify({
        icon: "notifications",
        message: "<b>Cancelled</b> "
  
    },{
        type: type[color],
        timer: 4000 ,
        placement: {
            from: 'bottom',
            align: 'right'
        },
        template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
          '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
          '<i class="material-icons" data-notify="icon">notifications</i> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
            '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          '</div>' +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>'
    });
     
  }, 5000);
 }

}

tableClear(){
this.tableForm.reset();
}


randomID()
{
return '_' + Math.random().toString(36).substr(2, 9);
}


get t(){
  return this.tableForm.controls
}



}
