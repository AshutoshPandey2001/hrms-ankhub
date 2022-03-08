import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-utkarsha-demo",
  templateUrl: "./utkarsha-demo.component.html",
  styleUrls: ["./utkarsha-demo.component.scss"],
})
export class UtkarshaDemoComponent implements OnInit {
  @ViewChild("closebutton") closebutton;

  empolyeeData: FormGroup;
  empolyeeList = [];
  globalVariable = "";
  submitted = false;

  constructor(private formBulider: FormBuilder) {
    this.empolyeeData = this.formBulider.group({
      name: ["", Validators.required],
      country: "",
      city: "",
    });
  }

  ngOnInit(): void {}

  submit() {
    this.submitted = true;
    if (this.empolyeeData.valid) {
      console.log("controls", this.f["name"].errors);
      this.empolyeeList.push(this.empolyeeData.value);

      this.closebutton.nativeElement.click();
      this.empolyeeData.reset();
      // this.clear();
    } else {
      console.log("plz enter valid input");
    }
  }

  get f() {
    return this.empolyeeData.controls;
  }

  delete(i) {
    this.empolyeeList.splice(i, 1);
  }

  clear() {
    this.empolyeeData.reset();
  }

  edit(i) {
    this.globalVariable = i;
    this.empolyeeData.patchValue({
      name: this.empolyeeList[i].name,
      country: this.empolyeeList[i].country,
      city: this.empolyeeList[i].city,
    });
  }

  update() {
    this.empolyeeList[this.globalVariable].name = this.empolyeeData.value.name;
    this.empolyeeList[this.globalVariable].country =
      this.empolyeeData.value.country;
    this.empolyeeList[this.globalVariable].city = this.empolyeeData.value.city;
  }
}
