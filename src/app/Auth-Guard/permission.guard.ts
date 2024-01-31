import { Injectable ,inject} from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, CanDeactivate, Resolve, RouterState, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserData } from '../Models/UserData';
import { CompanyListComponent } from './../home-view/company-list/company-list.component';
import { BranchDetails } from '../Models/BranchDetails';
import { BranchService } from '../Services/BranchService.service';

export interface IDeactivateComponent{
  CanDeactivateAccess:()=>Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})
export class PermissionGuard implements CanActivate ,CanDeactivate<IDeactivateComponent> ,Resolve<BranchDetails[]>{
  constructor(private currRoute:ActivatedRoute){}

  branchService:BranchService=inject(BranchService)

  loggedUSer!:UserData
  userRole:string|null=null
  permission:String[]=[]
  canActivate(

    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot

    ): boolean
    {
     
      const checkUser = sessionStorage.getItem('loggedUser');
      if (checkUser) {
       this.loggedUSer = JSON.parse(checkUser);
       this.userRole=this.loggedUSer.userrole
      }
    
      
      this.permission=route.data['permisson']
  
      if(this.permission.includes(this.userRole!)){
        return true
      }else{
        return false
      }
   
  }

  canDeactivate(
    component:IDeactivateComponent,currentRoute:ActivatedRouteSnapshot,
    currentstate:RouterStateSnapshot,nextState:RouterStateSnapshot){
      return component.CanDeactivateAccess()
      // return false
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): BranchDetails[] | Observable<BranchDetails[]> | Promise<BranchDetails[]> {
     return this.branchService.getAllBranch()
    }
  
}
