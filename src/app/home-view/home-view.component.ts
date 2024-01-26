import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserData } from '../Models/UserData';
import { userDataService } from '../Services/userDataService.service';
import { authService } from '../Services/authService';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css'],
})
export class HomeViewComponent implements OnInit {
  isAuthenticate: string | null = null;

  constructor(private Route: Router, private currentRoute: ActivatedRoute,private userservice:userDataService,
                private authService :authService) {
    // this.isAuthenticate =
    //   this.currentRoute.snapshot.queryParamMap.get('userrole');
    // console.log(this.isAuthenticate);

    // if (this.isAuthenticate === null) {
    //   this.Route.navigate(['login']);
    // }
  }

  // DashBoardEmployee:UserData[]=[]
  // loggedUser!: UserData;
  welcomeName: string | null = '';

  ngOnInit(): void {
    // this.DashBoardEmployee=this.userservice.getData()
    this.authService.getLoggedUser()
    this.welcomeName=this.authService.welcomeName  
  }

  logout(){
    localStorage.removeItem('loggedUser')
    localStorage.removeItem('token')
  
    this.Route.navigate(['login'])
    
    }
}
