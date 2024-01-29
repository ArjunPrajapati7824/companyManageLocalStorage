import { Component, Injectable, OnInit } from '@angular/core';
import { BranchDetails } from 'src/app/Models/BranchDetails';
import { ActivatedRoute } from '@angular/router';
import { BranchService } from 'src/app/Services/BranchService.service';

@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.css']
})
export class BranchListComponent implements OnInit {

  constructor(private branchService:BranchService) { }

  branchDetails:BranchDetails[]=[]


  ngOnInit(): void {
    this.branchDetails=this.branchService.getData()

  }

}
