import { Companydetails } from "../Models/Companydetails";

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

    deleteData(id:number){
        this.companyDetails.splice(id,1)

    }
}