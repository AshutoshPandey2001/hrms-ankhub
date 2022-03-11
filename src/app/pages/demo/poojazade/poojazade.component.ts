import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-poojazade',
  templateUrl: './poojazade.component.html',
  styleUrls: ['./poojazade.component.scss']
})
export class PoojazadeComponent implements OnInit {

  // staffname="";
  // post="";
  // staffList:any=[];
  // forLoginsuccess=false;

  // forselectedIndex="";
  // forselectedObj="";

  // staffForm: FormGroup;
  // staffSubmit=false;

  // onsearchkey='';


  // constructor(private formBuilder: FormBuilder) { 
  //   this.staffForm = formBuilder.group({
  //     staffname:['',[Validators.required,Validators.minLength(6),Validators.maxLength(10)]],
  //     post : ['',[Validators.required,Validators.minLength(6),Validators.maxLength(10)]],
  //   })


  //   // this.staffList = JSON.parse(localStorage.getItem('STAFF_LIST') || '')
  //   let data = localStorage.getItem('STAFF_LIST');
  //   if(data){
  //     this.staffList = JSON.parse(data);
  //   }
  // }
  

  // ngOnInit(): void {
  // }

  // onMove(){
  //   this.staffSubmit = true;
  //   console.log("control",this.staffForm.controls);
  //   console.log("staff_list", this.staffForm.value);
  //   localStorage.setItem("staff_list", JSON.stringify(this.staffForm.value))
    

  //   if(this.staffForm.valid){
  //     this.staffList.push(this.staffForm.value);
  //     localStorage.setItem("staff_list", JSON.stringify(this.staffForm.value))
  //     alert("form is valid submitted successfully")
  //   }
  //   else{
  //     alert("form is not-valid try again")
  //   }
  //   this.forclear()

  // }

  // get f(){
  //   return this.staffForm.controls;
  // }

  // //  // staffdetails
  // //  onMove(){
  // //   let staff={
  // //     staffname:this.staffname,
  // //     post:this.post,
     
  // //   }
  // //   this.staffList.push(staff)
  // //   console.log("this is my first button",staff);
  // //   localStorage.setItem("STAFF_LIST",JSON.stringify(this.staffList));
  // //   this.forclear()
  // // }

  // forUpdate(){
  //   console.log("forselected staffname",this.staffname);
  //   console.log("forselected post",this.post);
  //   this.staffList[this.forselectedIndex].staffname = this.staffForm.value.staffname;
  //   this.staffList[this.forselectedIndex].post= this.staffForm.value.post;
  //   localStorage.setItem("STAFF_LIST",JSON.stringify(this.staffList));
  //   this.forLoginsuccess=false;
  //   alert("submited successfully");
  //   this.forclear()


  // }

  
  // forEdit(index:any , obj:any){
  //   this.forselectedIndex = index;
  //   this.forselectedObj = obj;
  //   this.staffname= obj.staffname;
  //   this. post= obj. post;
  //   this.forLoginsuccess=true;

  //   console.log('index',index);
  //   console.log('obj',obj);
  //   this.staffForm.patchValue({
  //     staffname:obj.staffname,
  //     post:obj. post,
  // })

  // }

    
 
  // onRefresh(index:any){
  //   console.log("onRefresh",index)
  //   this.staffList.splice(index,1)

  // }
  // forclear(){
  //   // this.staffname ="";
  //   // this.post="";
  //   this.staffForm.reset();

  // }


  fullname="";
  email="";
  number="";
  dateofbirth="";
  gender="";
  qualification="";
  loading=false;


  staffList:any=[];
  forLoginsuccess=false;
  

  forselectedIndex="";
  forselectedObj="";
 
  staffForm: FormGroup;
  staffSubmit=false;

  onsearchkey='';


  constructor(private formBuilder: FormBuilder) { 
    this.staffForm = formBuilder.group({
      fullname:['',[Validators.required]],
      email : ['',[Validators.email]],
      number :['',[Validators.required,Validators.maxLength(10)]],
      dateofbirth :['',[Validators.required]],
      gender :['',[Validators.required]],
      qualification :['',[Validators.required]],




    })
    // this.staffList = JSON.parse(localStorage.getItem('STAFF_LIST') || '')
    let data = localStorage.getItem('STAFF_LIST');
    if(data){
      this.staffList = JSON.parse(data);
    }
  }

  

  ngOnInit(): void {
  }

  

  onMove(from,align){
    this.staffSubmit = true;
    console.log("control",this.staffForm.controls);
    console.log("staff_list", this.staffForm.value);
    console.log("this.staffList",this.staffList)
    if(this.staffForm.valid){
      this.staffForm.value.id=this.tableid();
      this.staffList.push(this.staffForm.value);
      localStorage.setItem("staff_list", JSON.stringify(this.staffList))
      this.loading = true;
     setTimeout(() =>{
      this.loading = false;
     

    
      const type = ['','info'];

      const color = Math.floor((Math.random() * 1) + 1);

      $.notify({
          icon: "notifications",
          message: "Submitted Successfully</b> - a beautiful freebie for every web developer."

      },{
          type: type[color],
          timer: 4000,
          placement: {
              from: from,
              align: align
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
    },5000);
      this.forclear()
    }
    else{
      alert("form is not-valid try again")
    }
   
   
    

  }

 

  //  // staffdetails
  //  onMove(){
  //   let staff={
  //     staffname:this.staffname,
  //     post:this.post,
     
  //   }
  //   this.staffList.push(staff)
  //   console.log("this is my first button",staff);
  //   localStorage.setItem("STAFF_LIST",JSON.stringify(this.staffList));
  //   this.forclear()
  // }

  forUpdate(from,align){
    this.forLoginsuccess=false;
    this.staffList[this.forselectedIndex].fullname = this.staffForm.value.fullname;
    this.staffList[this.forselectedIndex].email= this.staffForm.value.email;
    this.staffList[this.forselectedIndex].number= this.staffForm.value.number;
    this.staffList[this.forselectedIndex].dateofbirth= this.staffForm.value.dateofbirth;
    this.staffList[this.forselectedIndex].gender= this.staffForm.value.gender;
    this.staffList[this.forselectedIndex].qualification= this.staffForm.value.qualification;
    localStorage.setItem("STAFF_LIST",JSON.stringify(this.staffList));
    console.log("forUpdate",this.staffList);
    const type = ['','info'];

      const color = Math.floor((Math.random() * 1) + 1);

      $.notify({
          icon: "notifications",
          message: "<b>Updated Successfully</b> "

      },{
          type: type[color],
          timer: 4000,
          placement: {
              from: from,
              align: align
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

   
    alert(" Updated submited successfully");
    this.forclear()


  }

  
  forEdit( obj:any ,from,align){
    this.forselectedIndex = this.staffList.findIndex((y:any)=>y.id===obj.id);
    console.log('this.forselectedIndex', this.forselectedIndex);
    this.forselectedObj = obj;
    
    this.forLoginsuccess=true;
    this.staffForm.patchValue({
      fullname:obj.fullname,
      email:obj.email,
      number:obj.number,
      dateofbirth:obj.dateofbirth,
      gender :obj.gender,
      qualification:obj.qualification,
    })
    const type = ['','info'];

      const color = Math.floor((Math.random() * 1) + 1);

      $.notify({
          icon: "notifications",
          message: "<b>Edited Successfully</b> "

      },{
          type: type[color],
          timer: 4000,
          placement: {
              from: from,
              align: align
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

  console.log("forEdit");



  }

    
 
  onRefresh(id:any,from,align){
    console.log("onRefresh")
    this.forselectedIndex = this.staffList.findIndex((y:any)=>y.id===id);
    console.log('this.forselectedIndex', this.forselectedIndex);
    localStorage.setItem("STAFF_LIST",JSON.stringify(this.staffList));
    if(confirm('do you want delete')==true){
      const type = ['','danger'];

      const color = Math.floor((Math.random() * 1) + 1);

      $.notify({
          icon: "notifications",
          message: "<b>Delete Successfully</b> "

      },{
          type: type[color],
          timer: 4000,
          placement: {
              from: from,
              align: align
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
      this.staffList.splice(this.forselectedIndex,1)
      
    }else{
      const type = ['','warning'];

      const color = Math.floor((Math.random() * 1) + 1);

      $.notify({
          icon: "notifications",
          message: "Submitted Successfully</b> - a beautiful freebie for every web developer."

      },{
          type: type[color],
          timer: 4000,
          placement: {
              from: from,
              align: align
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

    }


  }

  forclear(){
    
    this.staffForm.reset();

  }
  tableid() {
    return '_' + Math.random().toString(36).substr(2, 9);
  };

  get f(){
    return this.staffForm.controls;
  }


  
  



}
