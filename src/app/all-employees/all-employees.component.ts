import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';


@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent implements OnInit {
   
  allemployees:any=[]
  searchKey:any=[]
   constructor(private api:ApiService){}
  ngOnInit(): void {
    this.getAllEmployees()
  }
  getAllEmployees(){
    this.api.getallEmployees().subscribe((data:any)=>{
      console.log(data);
      this.allemployees=data
    })
  }
  
   search(event:any){
    console.log(event.target.value);
      this.searchKey=event.target.value
   }

   deleteEmployee(employeeId:any){
    this.api.deleteEmployee(employeeId).subscribe((result:any)=>{
      alert("Deleted Sucessfully")
      this.getAllEmployees()
    })
   }
      
    }
  


