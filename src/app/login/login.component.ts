import { Component, OnInit } from '@angular/core';
import { UserData } from '../Models/UserData';
import { Router } from '@angular/router';
import { authService } from './../Services/authService';
import  swal  from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authservice: authService, private route: Router) { }

  LoginArray = { loginusername: '', loginpassword: '' }

  // arfinal:UserData[]=[]
  getUserData: UserData[] = []
  // isLoggedin:boolean=false
  ngOnInit(): void {
  }

  LoginUser(username: string, password: string) {

    if (username === '' || password === '') {
      swal.fire({
        icon:"info",
        text:"Fill all fields"
      })
      return
    } else {
      if (this.authservice.authLogin(username, password)) {
        this.route.navigate(['home'],
          // {queryParams:{userrole:this.authservice.arfinal[this.authservice.index].userrole}}
        )
      } else {
        swal.fire({
          icon:"error",
          text:"Invalid username or password"
        })
      }
      this.LoginArray.loginusername = ''
      this.LoginArray.loginpassword = ''
      console.log(this.LoginArray);
    }

    // let ar:string|null




  }
  // console.log(ar);





}
