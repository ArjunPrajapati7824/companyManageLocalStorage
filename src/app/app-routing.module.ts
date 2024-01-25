import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { EmployeeListComponent } from './home-view/employee-list/employee-list.component';
import { CompanyListComponent } from './home-view/company-list/company-list.component';
import { BranchListComponent } from './home-view/branch-list/branch-list.component';
import { AuthGuard } from './Auth-Guard/auth.guard';
import { LoginAuthGuard } from './Auth-Guard/login-auth.guard';
import { RegisterAuthGuard } from './Auth-Guard/register-auth.guard';

const routes: Routes = [
  {path:'',canActivate:[RegisterAuthGuard],component:RegisterComponent},
  {path:'login', canActivate:[LoginAuthGuard],component:LoginComponent},
  {path:'home', canActivate:[AuthGuard],component:HomeViewComponent,children:[
    {path:'employee',component:EmployeeListComponent},
    {path:'company',component:CompanyListComponent},
    {path:'branch',component:BranchListComponent},
  ]},
  {path:'**',redirectTo:"login"},
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
