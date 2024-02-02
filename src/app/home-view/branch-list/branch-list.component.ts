import { Component, Injectable, OnInit } from '@angular/core';
import { BranchDetails } from 'src/app/Models/BranchDetails';
import { ActivatedRoute } from '@angular/router';
import { BranchService } from 'src/app/Services/BranchService.service';
import { Observable, filter, from, map, reduce } from 'rxjs';

@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.css']
})
export class BranchListComponent implements OnInit {

  constructor(private branchService:BranchService,
    private currentRoute:ActivatedRoute) { }

  branchDetails:BranchDetails[]=[]

    ar1:number[]=[1,2,3,4,56]
    ar2:string[]=['A','B','C']
    myObservable=from(this.ar1)

  ngOnInit(): void {

    let transobs=this.myObservable.pipe(map((val)=>{
        return val*5
    }))


   


    this.branchService.isLoading=true

    // console.log(this.currentRoute.snapshot.data['branch']);


    this.currentRoute.data.subscribe(e=>{
      this.branchDetails=e['branch'];
      
    })
    

    
    // this.branchDetails=this.currentRoute.snapshot.data['branch'];
    setTimeout(()=>{
        this.branchService.isLoading=false
        this.branchService.isLoading
    },10)
    // this.branchService.isLoading=false
    // this.branchService.isLoading

    
  }
        

}
