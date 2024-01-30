import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { UserData } from '../Models/UserData';
import { userDataService } from '../Services/userDataService.service';
import { authService } from '../Services/authService';
import { CompanyDataService } from '../Services/companyDataService';
import { BranchListComponent } from './branch-list/branch-list.component';
import { BranchService } from './../Services/BranchService.service';


@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css'],
})
export class HomeViewComponent implements OnInit {
  isAuthenticate: string | null = null;

  constructor(
    private Route: Router,
    private currentRoute: ActivatedRoute,
    private userservice: userDataService,
    private authService: authService,
    private company: CompanyDataService,
    private branchService: BranchService,
  ) {
    // this.isAuthenticate =
    //   this.currentRoute.snapshot.queryParamMap.get('userrole');
    // console.log(this.isAuthenticate);
    // if (this.isAuthenticate === null) {
    //   this.Route.navigate(['login']);
    // }
  }

  // DashBoardEmployee:UserData[]=[]
  // loggedUser!: UserData;
  welcomeName: string | null = '';
  countEmployee: number = 0;
  countCompany: number = 0;
  countBranch: number = 0;
  canAdd:boolean=false
  addEmployeeFormOpen:boolean=false

  empdis:boolean=false


    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    
    
    ngDoCheck(): void {
      //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
      this.countEmployee = this.userservice.TempData.length;
      this.countCompany = this.company.companyDetails.length;
      this.countBranch = this.branchService.branchDetails.length;
      //Add 'implements DoCheck' to the class.
      
    }
    
    ngOnInit(): void {
      // this.DashBoardEmployee=this.userservice.getData()
      this.authService.getLoggedUser();
      this.welcomeName = this.authService.welcomeName;
      this.countEmployee = this.userservice.TempData.length;
      this.countCompany = this.company.companyDetails.length;
      this.countBranch = this.branchService.branchDetails.length;
      
      
     
        
  
      // console.log(e['permisson']);
      // console.log(e['permisson2']);

    

    this.canAdd=this.authService.canAddUser
  }

  logout() {
    sessionStorage.removeItem('loggedUser');
    localStorage.removeItem('token');
    this.authService.canAddUser=false
    this.Route.navigate(['login']);
  }

  openaddEmployeeForm(){
    this.addEmployeeFormOpen=true
  }

  addEmployee(name:string){
      this.userservice.addAdminemployee(name)
      this.addEmployeeFormOpen=false
  }

}
