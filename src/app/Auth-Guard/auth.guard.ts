import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { authService } from '../Services/authService';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private route:Router,private authservice:authService){}
  // canActivateChild(route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot):boolean{

  //     console.log(Boolean(this.authservice.getToken));
    

  //     if((this.authservice.getToken())){
  //       console.log(this.authservice.getToken);
        
  //     //  this.route.navigate(['/home'])
  //      return false
  //     }else{

  //       return true
  //     }
  //     //  this.route.navigate(['login'])
 
 
  // }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
      if(this.authservice.getToken()==='"AuthTokenKey"'){
        return true
      }else{
        this.route.navigate(['login'])
        return false
      }
      

  

    //  if(this.authservice.getToken()){
    //   // this.route.navigate(['/home'])
    //   return true
    //  }
    //   this.route.navigate(['login'])


    
  }
  
}
