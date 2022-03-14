import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-utkarsha-demo",
  templateUrl: "./utkarsha-demo.component.html",
  styleUrls: ["./utkarsha-demo.component.scss"],
})
export class UtkarshaDemoComponent implements OnInit {
  empolyeeData: FormGroup;
  empolyeeList = [];
  globalVariable = "";
  constructor(private formBulider: FormBuilder) {
    this.empolyeeData = this.formBulider.group({
      name: "",
      country: "",
      city: "",
    });
  }

  ngOnInit(): void {}

  submit() {
    console.log("Submit", this.empolyeeData.value);
    this.empolyeeList.push(this.empolyeeData.value);
  }

  delete(i) {
    this.empolyeeList.splice(i, 1);
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
    this.empolyeeList[this.globalVariable].country = this.empolyeeData.value.country;
    this.empolyeeList[this.globalVariable].city = this.empolyeeData.value.city;
  }
}
