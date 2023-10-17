import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';
import { allEmployees } from 'src/Model/allEmployees';
import { departments } from 'src/Model/department';
import { gender } from 'src/Model/gender';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit{
  genders:gender[]=[]
  department:departments[]=[]
  employee:allEmployees={}
  employeeid:string=""
  constructor(private activeRoute:ActivatedRoute,private api:ApiService){}


  ngOnInit(): void {
    this.activeRoute.params.subscribe((data:any)=>{
      console.log(data);
      console.log((data.employeeId));
      this.employeeid=data.employeeId
      

      //to view particular contact
      this.api.viewEmployeeDetails(this.employeeid).subscribe((result:any)=>{
        console.log(result);
        this.employee=result

        //to get departments
        this.api.getAllDepartments().subscribe((data:any)=>{
          console.log(data);
          this.department=data
         

          //to get gender
          this.api.getAllGender().subscribe((datas:any)=>{
            console.log(datas);
            this.genders=datas
          })
          
          
          
        })
      })
    })
  }
  updateEmployee(){
    this.api.updateEmployee(this.employeeid,this.employee).subscribe((result:any)=>{
      console.log(result);
      
    })
  }

}
