
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { allEmployees } from 'src/Model/allEmployees';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
//get all employees
getallEmployees():Observable<allEmployees>{
  return this.http.get('http://localhost:3000/employees')
}
 
//To get particular employee details
viewEmployeeDetails(employeeId:string){
  return this.http.get(`http://localhost:3000/employees/${employeeId}`)
}

//api call to get department name
getDepartmentName(departmentId:string){
  return this.http.get(`http://localhost:3000/department/${departmentId}`)
}

//api call to get gender name
getGenderName(genderId:string){
  return this.http.get(`http://localhost:3000/gender/${genderId}`)
}
//Api call to add employee details
addEmployee(employeeBody:any){
  return this.http.post(`http://localhost:3000/employees`,employeeBody)
}

//Api call to get all department details details
getAllDepartments(){
  return this.http.get(`http://localhost:3000/department`)
}

//Api call to get all gender details
getAllGender(){
  return this.http.get(`http://localhost:3000/gender`)
}


//Api call to delete employee details
deleteEmployee(employeeId:any){
  return this.http.delete(`http://localhost:3000/employees/${employeeId}`)
}

//update a specific epmployee details
updateEmployee(employeeId:any,employeeBody:any){
return this.http.put(`http://localhost:3000/employees/${employeeId}`,employeeBody)
}
}
