import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserData } from '../Models/UserData';
import { Router } from '@angular/router';
import { userDataService } from '../Services/userDataService.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // @ViewChild('username') username!:ElementRef
  // @ViewChild('password') password!:ElementRef
  constructor(private route:Router, private serviceUserData:userDataService) { }

  

    
  // UserData:UserData[]=[]
  ngOnInit(): void {
    console.log(this.serviceUserData.getLocalUserData())
    // this.UserData=[
    //   {userid:1001,username:"Super Admin",password:'0000',userrole:"superAdmin"},
    //   {userid:2001,username:"Admin",password:'1111',userrole:"Admin"},
    // ]
  }
  username:string=''
  password:string=''

  RegisterUSer(username:string,password:string){
    if(username === '' || password ===''){
      alert("Input All Field")
    }else{
      let userrole="user"
      this.serviceUserData.addDataLocalStorage(username,password,userrole)
      this.route.navigate(['login'])
    }

    this.username=''
    this.password=''
    
    // this.UserData.push({userid:id,username:name,password:pass,userrole:"user"})
    
    
    // this.UserData[this.UserData.length]=({userid:id,username:name,password:pass,userrole:"user"})
    // localStorage.setItem("UserData",JSON.stringify(this.UserData))
    

    // console.log("new",this.UserData);
    

  }


}
