import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserData } from '../Models/UserData';

@Injectable({
  providedIn: 'root'
})
export class PermissionGuard implements CanActivate {
  constructor(private currRoute:ActivatedRoute){}

  loggedUSer!:UserData
  userRole:string|null=null
  permission:String[]=[]
  canActivate(

    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot

    ): boolean
    {
      // console.log(this.currRoute.data.subscribe(e=>{
      //   console.log(e);
        
      // }));
      
      // this.permission.push(this.currRoute.data['permisson'])
      const checkUser = sessionStorage.getItem('loggedUser');
      if (checkUser) {
       this.loggedUSer = JSON.parse(checkUser);
       this.userRole=this.loggedUSer.userrole
      }
      // let perm=route.data['permisson']
      // console.log(perm);
      
      this.permission=route.data['permisson']
      // this.permission.forEach(e=>{
      //   console.log(e);
      // })
      if(this.permission.includes(this.userRole!)){
        return true
      }else{
        return false
      }
      console.log("dfg",this.permission.includes(this.userRole!));
      // console.log(this.userRole);

      
      
      
      // console.log(this.permission.includes(perm))
      
     

    
  }
  
}
