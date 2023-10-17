import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HrManagerComponent } from './hr-manager/hr-manager.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AllEmployeesComponent } from './all-employees/all-employees.component';
import {HttpClientModule} from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe'
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
@NgModule({
  declarations: [
    AppComponent,
    HrManagerComponent,
    AddEmployeeComponent,
    ViewEmployeeComponent,
    EditEmployeeComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    AllEmployeesComponent,
    FilterPipe,
    UserComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
