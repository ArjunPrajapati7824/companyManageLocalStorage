import { Component, OnInit } from '@angular/core';
import { Companydetails } from 'src/app/Models/Companydetails';
import { ActivatedRoute } from '@angular/router';
import { CompanyDataService } from 'src/app/Services/companyDataService';
import { authService } from 'src/app/Services/authService';


@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  constructor(private service : CompanyDataService,private currentRoute :ActivatedRoute,
              private authService:authService) { }


  editPermission:boolean=false
  deletePermission:boolean=false


  companyDetails:Companydetails[]=[]

    //forUpdate
    isFormOpen:boolean=false
    getId:number=0
    getid:number|null=null
    getname:string|null=null
    getlocation:string|null=null
    getGst:number|null=null

  ngOnInit(): void {
    

    this.companyDetails=this.service.getData()
    this.authService.getLoggedUser()
    

    if(this.authService.userRole==='user'){
      this.editPermission=false
      this.deletePermission=false
    }
  
    if(this.authService.userRole==='Admin'){
      this.editPermission=true
      this.deletePermission=false
    }
    if(this.authService.userRole==='SuperAdmin'){
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
