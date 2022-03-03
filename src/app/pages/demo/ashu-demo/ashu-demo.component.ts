import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ashu-demo',
  templateUrl: './ashu-demo.component.html',
  styleUrls: ['./ashu-demo.component.scss']
})
export class AshuDemoComponent implements OnInit {
  ashuForm:FormGroup;
  ashuarray:any=[];
  selectindex:any;
  editbtn=false;
  subBtn=false;
  term='';
  constructor(private FormBuilder: FormBuilder) {
    this.ashuForm= FormBuilder.group({
      idd:['', [Validators.required]],
      name:['', [Validators.required]],
      country:['', [Validators.required]],
      city:['', [Validators.required]],
      salary:['', [Validators.required]]
    })
    let data= localStorage.getItem("TABLE_LIST")
    if(data){
      this.ashuarray=JSON.parse(data);
    }
   }

  ngOnInit(): void {
  }
  formSubmit(){ 
    this.subBtn=true;
    if(this.ashuForm.valid){
      console.log('form value', this.ashuForm.value)
      this.ashuForm.value.id=this.randomID();
      this.ashuarray.push(this.ashuForm.value);
      localStorage.setItem("TABLE_LIST" , JSON.stringify(this.ashuarray));
      console.log('array', this.ashuarray);
      alert("Details Submitted Successfully")
      this.clear();
    }else{
      alert("Please Enter Correct Details")
    }
   
  }

  formUpdate(){
    this.subBtn=true;
    if(this.ashuForm.valid){
this.editbtn=false;
this.ashuarray[this.selectindex].idd=this.ashuForm.value.idd;
this.ashuarray[this.selectindex].name=this.ashuForm.value.name;
this.ashuarray[this.selectindex].country=this.ashuForm.value.country;
this.ashuarray[this.selectindex].city=this.ashuForm.value.city;
this.ashuarray[this.selectindex].salary=this.ashuForm.value.salary;
localStorage.setItem("TABLE_LIST" , JSON.stringify(this.ashuarray));
this.clear();
}else{
  alert("Please Enter Correct Details")
}
  }

  update(obj:any){
    this.editbtn=true;
    this.selectindex=this.ashuarray.findIndex((x: any) => x.id === obj.id);
    this.ashuForm.patchValue({
      idd:obj.idd,
      name:obj.name,
      country:obj.country,
      city:obj.city,
      salary:obj.salary
    })
  }
  delTb(id:any){
    this.selectindex=this.ashuarray.findIndex((x: any) => x.id === id);
    this.ashuarray.splice(this.selectindex,1);
    localStorage.setItem("TABLE_LIST" , JSON.stringify(this.ashuarray));

  }
  get f(){
    return this.ashuForm.controls;
  }
  clear(){
    this.ashuForm.reset();
  }
  randomID() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }
}
