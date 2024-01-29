import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserData } from '../Models/UserData';
import { Router } from '@angular/router';
import { userDataService } from '../Services/userDataService.service';
import { NgAlertBoxComponent } from 'ng-alert-box-popup';
import  swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // @ViewChild('username') username!:ElementRef
  // @ViewChild('password') password!:ElementRef
  constructor(private route:Router, private serviceUserData:userDataService,
              private alert : NgAlertBoxComponent) { }

  

    
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
      swal.fire({
        icon:"info",
        text:"Fill all fields"
      })
      return
    }
    if(!username.match(/^[a-zA-Z]+$/)){
      swal.fire({
        icon:"info",
        text:"Username only contains alphabet"
      })
      return

      

    }
    if(username.length<3){
      swal.fire({
        icon:"info",
        text:"User name must be atleast 3 characters"
      })
      return

    }
    if(password.length<6){
      swal.fire({
        icon:"info",
        text:"password must be atleast 6 characters "
      })
      return

    }
    else{
      let userrole="user"
      this.serviceUserData.addDataLocalStorage(username,password,userrole)
      swal.fire({
        icon:"success",
        text:"Data Added"
      })
      // this.route.navigate(['login'])
    }
  
    this.username=''
    this.password=''
    
    // this.UserData.push({userid:id,username:name,password:pass,userrole:"user"})
    
    
    // this.UserData[this.UserData.length]=({userid:id,username:name,password:pass,userrole:"user"})
    // localStorage.setItem("UserData",JSON.stringify(this.UserData))
    

    // console.log("new",this.UserData);
    

  }


}
