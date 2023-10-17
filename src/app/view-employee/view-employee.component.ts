import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
  employeeId:string=""
  employee:any=[]

  departmentId:string=""//to hold departmentid of departments
  departmentName:string=""//to hold deparntmentname of departments

  genderId:string=""
  gendername:string=""
  constructor(private activeRoute:ActivatedRoute,private api:ApiService){}
  ngOnInit(): void {
    this.activeRoute.params.subscribe((data:any)=>{
      console.log(data);
      console.log(data.Id);
      this.employeeId=data.Id

      this.api.viewEmployeeDetails(this.employeeId).subscribe((result:any)=>{
        console.log(result);
        this.employee=result
        this.departmentId=result.departmentid

        this.genderId=result.genderid
        console.log(this.departmentId);
        this.api.getDepartmentName(this.departmentId).subscribe((data:any)=>{
          console.log(data);
          this.departmentName=data.name

          this.api.getGenderName(this.genderId).subscribe((datas:any)=>{
            console.log(datas);
            this.gendername=datas.name
            
          })
        })
        
      })
      
    })
  }


}
