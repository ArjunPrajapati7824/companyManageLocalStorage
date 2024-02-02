import swal from "sweetalert2";
import { Companydetails } from "../Models/Companydetails";
import { BehaviorSubject, Subject } from "rxjs";
import { HomeViewComponent } from './../home-view/home-view.component';
import { getLocaleFirstDayOfWeek } from "@angular/common";
import { BranchService } from "./BranchService.service";

export class CompanyDataService{

    companyDetails:Companydetails[]=[
        {companyId:101,companyName:"Reliance",companyLocation:"Ahmedabad",companyGstNumber:12345},
        {companyId:102,companyName:"Adani",companyLocation:"Rajkot",companyGstNumber:67890},
        {companyId:103,companyName:"Balaji",companyLocation:"Surat",companyGstNumber:13525},
        {companyId:104,companyName:"Britaniya",companyLocation:"Baroda",companyGstNumber:85743},
        {companyId:105,companyName:"Sunfeast",companyLocation:"bhavnagar",companyGstNumber:65345},
      ]


      getData(){
        return this.companyDetails
    }

    updateData(refid:number,idnew:string,namenew:string,locationnew:string,gstnew:string){
        this.companyDetails.splice(refid,1)
        this.companyDetails.splice(refid,0,{companyId:Number(idnew),companyName:namenew,companyLocation:locationnew,companyGstNumber:Number(gstnew)})

    }

    sendCurrentData=new BehaviorSubject<number>(this.companyDetails.length);
  

    sendCurrentLength(){
      this.sendCurrentData.next(this.companyDetails.length)
     
  
      }

    deleteData(id:number){
    swal.fire({
            title:"Delete",
            text:"Are you sure",
            showCancelButton:true,
            confirmButtonAriaLabel:"Yes",
            cancelButtonAriaLabel:"No"
          }).then((result)=>{
            if(result.value){
                this.companyDetails.splice(id,1)
                this.sendCurrentLength()
              swal.fire({
                icon:"success",
                title:"Delete",
                text:"Data Deleted"
              })
            }else{
              swal.fire({
                icon:"success",
                text:"Data is safe"
              })
            }
          })
    

    }
}