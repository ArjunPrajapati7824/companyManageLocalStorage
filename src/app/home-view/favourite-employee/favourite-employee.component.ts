import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/app/Models/UserData';
import { userDataService } from 'src/app/Services/userDataService.service';

@Component({
  selector: 'app-favourite-employee',
  templateUrl: './favourite-employee.component.html',
  styleUrls: ['./favourite-employee.component.css'],
})
export class FavouriteEmployeeComponent implements OnInit {
  constructor(private userService: userDataService) {}

  favourteUser: UserData[]=[] ;
  fvrtuser:UserData[]=[]
  ngOnInit(): void {
    // this.userService.addFavourite

    this.userService.addFavourite.subscribe((userData:UserData)=> {
      this.favourteUser.push(userData);
     
      console.log(this.favourteUser);
    });   
  }

  
 
}
