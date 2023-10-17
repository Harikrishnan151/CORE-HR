import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HrManagerComponent } from './hr-manager/hr-manager.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AllEmployeesComponent } from './all-employees/all-employees.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {//localhost:4200->localhost4200/hrManager
    path:'',redirectTo:'hrManager',pathMatch:'full'
  },
  { 
    path:'hrManager',component:HrManagerComponent
  },
  {//listing all Employees detils
    path:'hrManager/allEmployees',component:AllEmployeesComponent
  },
  {//add employee
   path:'hrManager/addEmployee',component:AddEmployeeComponent
  },
  {// view particular employee
    path:'hrManager/allEmployees/view/:Id',component:ViewEmployeeComponent
  },
  {//edit employee detials
    path:'hrManager/edit/:employeeId',component:EditEmployeeComponent
  },
  {//user details
   path:'hrManager/user',component:UserComponent
  },
  {//page not found
    path:'**',component:PageNotFoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
