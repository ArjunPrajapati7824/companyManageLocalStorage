import { Component, OnInit } from '@angular/core';
import { BranchDetails } from 'src/app/Models/BranchDetails';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.css']
})
export class BranchListComponent implements OnInit {

  constructor() { }


  branchDetails:BranchDetails[]=[
    {branchId:201,companyId:101,branchName:"Reliance",branchCount:4},
    {branchId:202,companyId:102,branchName:"Adani",branchCount:5},
    {branchId:203,companyId:103,branchName:"Balaji",branchCount:6},
    {branchId:204,companyId:104,branchName:"Britaniya",branchCount:3},
    {branchId:205,companyId:105,branchName:"Sunfeast",branchCount:2},
  ]

  ngOnInit(): void {

  }

}
