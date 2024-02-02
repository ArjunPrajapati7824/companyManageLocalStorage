import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanDeactivate } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { EmployeeListComponent } from './home-view/employee-list/employee-list.component';
import { CompanyListComponent } from './home-view/company-list/company-list.component';
import { BranchListComponent } from './home-view/branch-list/branch-list.component';
import { AuthGuard } from './Auth-Guard/auth.guard';
import { LoginAuthGuard } from './Auth-Guard/login-auth.guard';
import { ErrorPagenotFoundComponent } from './error-pagenot-found/error-pagenot-found.component';
import { authService } from './Services/authService';
import { PermissionGuard } from './Auth-Guard/permission.guard';
import { FavouriteEmployeeComponent } from './home-view/favourite-employee/favourite-employee.component';

const routes: Routes = [
  {path:'',canActivate:[LoginAuthGuard],component:RegisterComponent},
  {path:'login', canActivate:[LoginAuthGuard],component:LoginComponent},
  {path:'home', canActivate:[AuthGuard],component:HomeViewComponent,children:[
    {path:'employee', data:{permisson:["user","Admin","SuperAdmin"]},canActivate:[PermissionGuard],canDeactivate:[PermissionGuard],component:EmployeeListComponent},
    {path:'company',data:{permisson:["Admin","SuperAdmin"]},canActivate:[PermissionGuard],canDeactivate:[PermissionGuard],component:CompanyListComponent},
    {path:'branch',data:{permisson:["SuperAdmin"]},canActivate:[PermissionGuard],resolve:{branch:PermissionGuard},component:BranchListComponent},
    {path:'favourite', component:FavouriteEmployeeComponent}
  ]},
  {path:'**',component:ErrorPagenotFoundComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule { 
  constructor(private authSer:authService){}
}
