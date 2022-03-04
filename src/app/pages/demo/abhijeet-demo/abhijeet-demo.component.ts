import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abhijeet-demo',
  templateUrl: './abhijeet-demo.component.html',
  styleUrls: ['./abhijeet-demo.component.scss']
})
export class AbhijeetDemoComponent implements OnInit {
  member ={
    name:'',
    country:'',
    city:''
  }
  selectededitData:any;
   memberList:any=[];

  constructor() { }

  ngOnInit(): void {this.memberList = JSON.parse(localStorage.getItem('studentData') || '')  }
  onsubmit(){
    this.memberList.push(this.member)
    this.member ={
      name:'',
      country:'',
      city:'',
  
    }
     localStorage.setItem('studentData', JSON.stringify(this.memberList) )
     alert("The Data is Successfully Submit")
  }  
   
   onDelete(index:any){
     this.memberList.splice(index, 1);
     localStorage.setItem('studentData', JSON.stringify(this.memberList) )

   }
   onedit(index:any){
     this.selectededitData = this.memberList[index]
   
   }
   Update()
   {
    localStorage.setItem('studentData', JSON.stringify(this.memberList) )

   }
   }
 
