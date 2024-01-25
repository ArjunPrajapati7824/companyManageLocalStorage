import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router,RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { authService } from '../Services/authService';


@Injectable({
  providedIn: 'root'
})
export class RegisterAuthGuard implements CanActivate {
  constructor(private route:Router,private authservice:authService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.authservice.getToken()==='"AuthTokenKey"'){
       
        this.route.navigate(['home'])
        return false;
     }else{
       // this.route.navigate(['home'])
       return true
     }
  }
  
}
