import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-abhay-demo',
  templateUrl: './abhay-demo.component.html',
  styleUrls: ['./abhay-demo.component.scss']
})
export class AbhayDemoComponent implements OnInit {

  searchedbox = '';
  carForm: FormGroup;
  submitted = false;
  carsList: any = [];

  issubmitoperation = false;
  selectedIndex: any;
  selectedObject: any;

  
  constructor(private formBuilder: FormBuilder) {
    
    this.carForm = this.formBuilder.group({
      carmodels: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(9)]],
      carcolor: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(13)]]
    })

    let data = localStorage.getItem('CARSLIST')
    if (data) {
      this.carsList = JSON.parse(data);
    }

   }

  ngOnInit(): void {
  }


  abrSubmit() {
    this.submitted = true;
    //console.log("Control works",this.carForm.controls);
    //console.log("Submit works",this.carForm.value);

    console.log("Controls are valid", this.carsList);
    if (this.carForm.valid) {
      this.carForm.value.id = this.uniqueid();
      this.carsList.push(this.carForm.value)
      alert("Form is Valid...Submit Successfully!")
      this.caclear()
    }
    else {
      alert("Form is invalid....Please try again!")
    }
    localStorage.setItem("CARSLIST", JSON.stringify(this.carsList));

  }

  carUpdate() {
    this.carsList[this.selectedIndex].carmodels = this.carForm.value.carmodels;
    this.carsList[this.selectedIndex].carcolor = this.carForm.value.carcolor;

    this.issubmitoperation = false;
    alert("Updated Successfully");
    this.caclear()
  }

  carEdit(obj: any) {
    this.selectedIndex = this.carsList.findIndex((xt:any)=>xt.id === obj.id);
    console.log('this.selectedIndex', this.selectedIndex)
    this.selectedObject = obj;

    this.issubmitoperation = true;
    this.carForm.patchValue({
      carmodels: obj.carmodels,
      carcolor: obj.carcolor
    })
  }

  carDelete(id:any) {
    this.selectedIndex = this.carsList.findIndex((xt:any)=>xt.id === id);
    
    this.carsList.splice(this.selectedIndex, 1);
    localStorage.setItem("CARSLIST", JSON.stringify(this.carsList));
  }

  get f() {
    return this.carForm.controls;
  }

  caclear() {
    this.carForm.reset();
  }

  uniqueid() {
    return '_' + Math.random().toString(36).substr(2, 9);
  };
}
