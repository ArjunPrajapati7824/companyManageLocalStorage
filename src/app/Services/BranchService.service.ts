import { ActivatedRoute } from "@angular/router";
import { BranchDetails } from "../Models/BranchDetails";
import { Observable } from "rxjs";

export class BranchService{

    branchDetails:BranchDetails[]=[
        {branchId:201,companyId:101,branchName:"Reliance",branchCount:4},
        {branchId:202,companyId:102,branchName:"Adani",branchCount:5},
        {branchId:203,companyId:103,branchName:"Balaji",branchCount:6},
        {branchId:204,companyId:104,branchName:"Britaniya",branchCount:3},
        {branchId:205,companyId:105,branchName:"Sunfeast",branchCount:2},
      ]

      getData(){
        return this.branchDetails
    }

    isLoading:boolean=false
    getAllBranch(){
      this.isLoading=true
      return new Observable<BranchDetails[]>((sub)=>{
    
        setTimeout(()=>{
            sub.next(this.branchDetails)
        },5000)
      })  
      // this.isLoading=false
    }

    

}