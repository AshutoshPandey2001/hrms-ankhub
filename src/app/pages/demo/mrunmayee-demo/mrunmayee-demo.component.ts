import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mrunmayee-demo',
  templateUrl: './mrunmayee-demo.component.html',
  styleUrls: ['./mrunmayee-demo.component.scss']
})
export class MrunmayeeDemoComponent implements OnInit {

  demoForm:FormGroup;

  demoList:any=[];

  submitted=false;

  isEditOperation=false;

  selectedIndex:any;
  selectedObj:any;
  
  constructor(private formBuilder:FormBuilder) {
    this.demoForm =this.formBuilder.group({
      iD:['',[Validators.required]],
      name:['',[Validators.required]],
      country:['',[Validators.required]],
      city:['',[Validators.required]],
    }) 
    let data = localStorage.getItem('Demo_List');
    if(data){
      this.demoList = JSON.parse(data);
    }
    
    }

  ngOnInit(): void {
  }

  submit(){
    this.submitted=true;

    if(this.demoForm.valid){
      this.demoList.push(this.demoForm.value)
      console.log("you clicked",this.demoForm.value)

      localStorage.setItem("Demo_List",JSON.stringify(this.demoList))


      alert("Submitted Successfully..!!")
    }
    else{
      alert("Invalid..")
    }
    this.clear();
   
  }

  Update(){
    this.isEditOperation=false;
   
    this.demoList[this.selectedIndex].iD = this.demoForm.value.iD;
    this.demoList[this.selectedIndex].name = this.demoForm.value.name;
    this.demoList[this.selectedIndex].country = this.demoForm.value.country;
    this.demoList[this.selectedIndex].city = this.demoForm.value.city;
    alert("Details Updated Successfully..!!")
    localStorage.setItem("Demo_List",JSON.stringify(this.demoList))
  
    this.clear();
  
  }

  onEdit(index:any , obj:any){
    this.isEditOperation=true;
    this.selectedIndex=index;
    this.selectedObj=obj;
    console.log("selectedindex",this.demoForm.value.iD);
    console.log("selectedindex" ,this.demoForm.value.name);
    console.log("selectedindex" ,this.demoForm.value.country);
    console.log("selectedindex" ,this.demoForm.value.city);
    
    this.demoForm.patchValue({
      iD:obj.iD,
      name:obj.name,
      country:obj.country,
      city:obj.city

    })
  }

  onDelete(index:any){
  console.log("onDelete",index);
  this.demoList.splice(index,1)
}  


get f(){
  return this.demoForm.controls;
}

clear(){
  this.demoForm.reset();
}

}
