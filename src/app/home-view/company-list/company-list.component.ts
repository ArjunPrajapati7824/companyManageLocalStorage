import { Component, OnInit } from '@angular/core';
import { Companydetails } from 'src/app/Models/Companydetails';
import { ActivatedRoute } from '@angular/router';
import { CompanyDataService } from 'src/app/Services/companyDataService';


@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  constructor(private service : CompanyDataService,private currentRoute :ActivatedRoute) { }


  editPermission:boolean=false
  deletePermission:boolean=false
  userrole:string|null=null


  companyDetails:Companydetails[]=[]

    //forUpdate
    isFormOpen:boolean=false
    getId:number=0
    getid:number|null=null
    getname:string|null=null
    getlocation:string|null=null
    getGst:number|null=null

  ngOnInit(): void {
    localStorage.setItem('companyDetails',JSON.stringify(this.companyDetails))
    
    this.userrole=this.currentRoute.snapshot.queryParamMap.get('userrole')

    this.companyDetails=this.service.getData()

    if(this.userrole==='user'){
      this.editPermission=false
      this.deletePermission=false
    }
  
    if(this.userrole==='Admin'){
      this.editPermission=true
      this.deletePermission=false
    }
    if(this.userrole==='superAdmin'){
      this.editPermission=true
      this.deletePermission=true
    }
    
  }

  formOpen(item:Companydetails){
    this.isFormOpen=true//update value for show or not form

    //set values in form
    this.getid=item.companyId
    this.getname=item.companyName
    this.getlocation=item.companyLocation
    this.getGst=item.companyGstNumber

    //find index for which data u want to update
    console.log(this.companyDetails);
    this.getId=this.companyDetails.findIndex(ele=>{
      return ele.companyId===item.companyId
    })
    console.log(this.getId);
    
   
  }

  updateData(id:string,name:string,location:string,gst:string){
    this.service.updateData(this.getId,id,name,location,gst)
    this.isFormOpen=false//update value for show or not form

  }

  deleteData(item:Companydetails){
    this.getId=this.companyDetails.findIndex(ele=>{
      return ele.companyId===item.companyId
    })
    this.service.deleteData(this.getId)
   

  }

}
