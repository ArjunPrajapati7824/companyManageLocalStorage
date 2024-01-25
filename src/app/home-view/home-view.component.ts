import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserData } from '../Models/UserData';
import { userDataService } from '../Services/userDataService.service';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css'],
})
export class HomeViewComponent implements OnInit {
  isAuthenticate: string | null = null;

  constructor(private Route: Router, private currentRoute: ActivatedRoute,private userservice:userDataService) {
    // this.isAuthenticate =
    //   this.currentRoute.snapshot.queryParamMap.get('userrole');
    // console.log(this.isAuthenticate);

    // if (this.isAuthenticate === null) {
    //   this.Route.navigate(['login']);
    // }
  }

  DashBoardEmployee:UserData[]=[]
  loggedUser!: UserData;
  welcomeName: string | null = null;
  userRole: string | null = null;

  ngOnInit(): void {
    const checkUser = localStorage.getItem('loggedUser');
    console.log(checkUser);

    this.DashBoardEmployee=this.userservice.getData()
    
    if (checkUser) {
      this.loggedUser = JSON.parse(checkUser);
      this.welcomeName = this.loggedUser.username;
      console.log(this.welcomeName);

      this.userRole = this.currentRoute.snapshot.queryParamMap.get('userrole');
      // console.log(this.userRole);
    }
    // const d=localStorage.removeItem('loggedUser')
    // console.log(d);
    
  }

  logout(){
    localStorage.removeItem('loggedUser')
    localStorage.removeItem('token')
  
    this.Route.navigate(['login'])
    
    }
}
