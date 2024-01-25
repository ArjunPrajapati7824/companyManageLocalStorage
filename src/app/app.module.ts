import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HomeViewComponent } from './home-view/home-view.component';
import { LoginComponent } from './login/login.component';
import { CompanyListComponent } from './home-view/company-list/company-list.component';
import { BranchListComponent } from './home-view/branch-list/branch-list.component';
import { EmployeeListComponent } from './home-view/employee-list/employee-list.component';
import { userDataService } from './Services/userDataService.service';
import { CompanyDataService } from './Services/companyDataService';
import { authService } from './Services/authService';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeViewComponent,
    LoginComponent,
    CompanyListComponent,
    BranchListComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [userDataService,CompanyDataService,authService],
  bootstrap: [AppComponent]
})
export class AppModule { }
