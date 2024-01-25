import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserData } from '../Models/UserData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // @ViewChild('username') username!:ElementRef
  // @ViewChild('password') password!:ElementRef
  constructor(private route:Router) { }

  id=0
  

    
  UserData:UserData[]=[]
  ngOnInit(): void {
    this.UserData=[
      {userid:1001,username:"Super Admin",password:'0000',userrole:"superAdmin"},
      {userid:2001,username:"Admin",password:'1111',userrole:"Admin"},
    ]
  }

  RegisterUSer(username:string,password:string){
    let id=++this.id
    let userrole="user"
    // this.UserData.push({userid:id,username:name,password:pass,userrole:"user"})
    
    
    this.UserData[this.UserData.length]=({userid:id,username:name,password:pass,userrole:"user"})
    localStorage.setItem("UserData",JSON.stringify(this.UserData))
    

    console.log("new",this.UserData);
    
    // this.route.navigate(['../login'])

  }


}
