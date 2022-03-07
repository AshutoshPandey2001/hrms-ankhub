import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shraddha-demo',
  templateUrl: './shraddha-demo.component.html',
  styleUrls: ['./shraddha-demo.component.scss']
})
export class ShraddhaDemoComponent implements OnInit {





  staffsId="";
  staffsTiming="";

  searchBar="";

  isasEnterSuccess = false;
  staffList:any=[];
  selectASD:any;
  selectRTY:any;

  staffForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.staffForm = this.formBuilder.group({
      staffsId: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(7)]],
      staffsTiming: ['',[Validators.required,Validators.minLength(8),Validators.maxLength(10)]]
    })

    // this.staffList = JSON.parse(localStorage.getItem('STAFF_LIST') || '')
    let data=localStorage.getItem('STAFF_LIST')
    if (data){
      this.staffList=JSON.parse(data)
    }
   }

  ngOnInit(): void {
  }

  // asEnter(){
  //   let staffIof = {
  //     staffsId:this.staffsId, 
  //     staffsTiming:this.staffsTiming
  //   }
  //   this.staffList.push(staffIof)
  //   localStorage.setItem("STAFF_LIST",JSON.stringify(this.staffList));
  //   console.log("asEnter",this.staffList);
  //   // this.isasEnterSuccess = true;
  //   this.asclear()
  // }

  asUpdate(){
    this.isasEnterSuccess = false;
  this.staffList[this.selectASD].staffsId = this.staffForm.value.staffsId;
  this.staffList[this.selectASD].staffsTiming = this.staffForm.value.staffsTiming;
  localStorage.setItem("STAFF_LIST",JSON.stringify(this.staffList));
    console.log("asUpdate", this.staffList);
    
    alert("submitted successfully");
   this.clear()
  }

 clear(){
   this.staffForm.reset()
 }

  asEdit(index:any,obj:any){
    this.selectASD = index;
    this.selectRTY = obj;
  
   this.staffForm.patchValue({
    staffsId: obj.staffsId,
    staffsTiming: obj.staffsTiming
   })
    console.log("asEdit");
   this.isasEnterSuccess = true;
  }
  
  asDelete(index:any){
    console.log("asDelete");
    this.staffList.splice(index,1)
    localStorage.setItem("STAFF_LIST",JSON.stringify(this.staffList));
  }

  asEnter(){
    this.submitted = true;
   
    if(this.staffForm.valid){
      this.staffList.push(this.staffForm.value);
      localStorage.setItem("STAFF_LIST",JSON.stringify(this.staffList));
      alert("Form is valid...Submitted Successfully!")
    }else{
      alert("Form is invalid...Please try again!")
    }
    console.log("controls",this.staffForm.controls);
    console.log("work submit",this.staffForm.value);
    this.clear()
  }

 


  get f(){
    return this.staffForm.controls;
  }


}
