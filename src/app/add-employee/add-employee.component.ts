import { Component, OnInit } from '@angular/core';
import { allEmployees } from 'src/Model/allEmployees';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  allDepartments:any=[]
  allGender:any=[]
  employee:allEmployees={}
   
  constructor(private api:ApiService,private router:Router){ 
    this.employee.departmentid="Select department"
    this.employee.genderid="Gender"
  }
  ngOnInit(): void {
    this.api.getAllDepartments().subscribe((data:any)=>{
      console.log(data);
      this.allDepartments=data
    })

    this.api.getAllGender().subscribe((details:any)=>{
      console.log(details);
      this.allGender=details
    })
  }
  addEmployee(){
    this.api.addEmployee(this.employee).subscribe((result:any)=>{
      this.router.navigateByUrl('hrManager/allEmployees')
    })
  }

}
