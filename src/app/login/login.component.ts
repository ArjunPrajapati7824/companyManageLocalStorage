import { Component, OnInit } from '@angular/core';
import { UserData } from '../Models/UserData';
import { Router } from '@angular/router';
import { authService } from './../Services/authService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authservice :authService,private route:Router) { }

  LoginArray={loginusername:'',loginpassword:''}

  // arfinal:UserData[]=[]
  getUserData:UserData[]=[]
  // isLoggedin:boolean=false
  ngOnInit(): void {
  }

  LoginUser(username:string,password:string){
    if(this.authservice.authLogin(username,password)){
          this.route.navigate(['home'],{queryParams:{userrole:this.authservice.arfinal[this.authservice.index].userrole}})
    }else{
      alert("Invalid username or password")
    }
    console.log(this.LoginArray);
    // let ar:string|null
   
    
    

  }
    // console.log(ar);
    
    
    
  

}
