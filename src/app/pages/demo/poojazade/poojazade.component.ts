import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-poojazade',
  templateUrl: './poojazade.component.html',
  styleUrls: ['./poojazade.component.scss']
})
export class PoojazadeComponent implements OnInit {

  staffname="";
  post="";
  staffList:any=[];
  forLoginsuccess=false;

  forselectedIndex="";
  forselectedObj="";

  staffForm: FormGroup;
  staffSubmit=false;

  onsearchkey='';


  constructor(private formBuilder: FormBuilder) { 
    this.staffForm = formBuilder.group({
      staffname:['',[Validators.required,Validators.minLength(6),Validators.maxLength(10)]],
      post : ['',[Validators.required,Validators.minLength(6),Validators.maxLength(10)]],
    })


    // this.staffList = JSON.parse(localStorage.getItem('STAFF_LIST') || '')
    let data = localStorage.getItem('STAFF_LIST');
    if(data){
      this.staffList = JSON.parse(data);
    }
  }
  

  ngOnInit(): void {
  }

  onMove(){
    this.staffSubmit = true;
    console.log("control",this.staffForm.controls);
    console.log("staff_list", this.staffForm.value);
    localStorage.setItem("staff_list", JSON.stringify(this.staffForm.value))
    

    if(this.staffForm.valid){
      this.staffList.push(this.staffForm.value);
      localStorage.setItem("staff_list", JSON.stringify(this.staffForm.value))
      alert("form is valid submitted successfully")
    }
    else{
      alert("form is not-valid try again")
    }
    this.forclear()

  }

  get f(){
    return this.staffForm.controls;
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

  forUpdate(){
    console.log("forselected staffname",this.staffname);
    console.log("forselected post",this.post);
    this.staffList[this.forselectedIndex].staffname = this.staffForm.value.staffname;
    this.staffList[this.forselectedIndex].post= this.staffForm.value.post;
    localStorage.setItem("STAFF_LIST",JSON.stringify(this.staffList));
    this.forLoginsuccess=false;
    alert("submited successfully");
    this.forclear()


  }

  
  forEdit(index:any , obj:any){
    this.forselectedIndex = index;
    this.forselectedObj = obj;
    this.staffname= obj.staffname;
    this. post= obj. post;
    this.forLoginsuccess=true;

    console.log('index',index);
    console.log('obj',obj);
    this.staffForm.patchValue({
      staffname:obj.staffname,
      post:obj. post,
  })

  }

    
 
  onRefresh(index:any){
    console.log("onRefresh",index)
    this.staffList.splice(index,1)

  }
  forclear(){
    // this.staffname ="";
    // this.post="";
    this.staffForm.reset();

  }
  




}
