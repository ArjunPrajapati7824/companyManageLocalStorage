import { Component, ElementRef, OnInit ,ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserData } from 'src/app/Models/UserData';
import { userDataService } from './../../Services/userDataService.service';
import { authService } from 'src/app/Services/authService';
import swal from 'sweetalert2';
import { IDeactivateComponent } from 'src/app/Auth-Guard/permission.guard';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit ,IDeactivateComponent{

  @ViewChild('updateId') id!:ElementRef
  @ViewChild('updateName') name!:ElementRef
  @ViewChild('updateRole') role!:ElementRef
  @ViewChild('addEmployeeId') addEmp!:ElementRef
  constructor(private service : userDataService,private Route : Router,private currentRoute :ActivatedRoute,
              private authService:authService) { 
   
  
  }
  editPermission:boolean=false
  deletePermission:boolean=false
  loggedUser!:UserData
  userrole:string|null=null
  
  //forUpdate
  isFormOpen:boolean=false
  getId:number=0
  getid:number|null=null
  getname:string|null=null
  getrole:string|null=null
  addEmployeeFormOpen:boolean=false
  isFormSubmit:boolean=false
  
  // TempData
  TempData:UserData[]=[]
  
  //open add empl form
  openaddForm:boolean=false
  isAddFormSubmit:boolean=false

  //For favourite
  fvrt:boolean=false

  

  ngOnInit(): void {

  this.TempData=this.service.getData()

  
  
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
  
  
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    this.openaddForm=this.service.addEmployeeFormOpen
    // if(this.openaddForm){
    //   this.Route.navigate(['/home/employee'])
    // }
    
  }
     
  formOpen(item:UserData){
    this.isFormOpen=true//update value for show or not form

    //set values in form
    this.getid=item.userid
    this.getname=item.username
    this.getrole=item.userrole

    //find index for which data u want to update
    console.log(this.TempData);
    this.getId=this.TempData.findIndex(ele=>{
      return ele.userid===item.userid
    })
    console.log(this.getId);
    
   
  }

  updateData(id:string,name:string,role:string){
    this.service.updateData(this.getId,id,name,role)
    this.isFormSubmit=true

    this.isFormOpen=false//update value for show or not form

  }

  deleteData(item:UserData){
    this.getId=this.TempData.findIndex(ele=>{
      return ele.userid===item.userid
    })
    if(this.getid===item.userid && this.isFormOpen){
      this.isFormOpen=false
    }
    this.service.deleteData(this.getId)
   

  }

  CanDeactivateAccess(){
    if(this.isFormOpen ){

      if((this.id.nativeElement.value || this.name.nativeElement.value|| this.role.nativeElement.value )    && !this.isFormSubmit ){
        return confirm("You discard without update data")
      }else{
        return true
      }
    } else if(this.openaddForm ){

      if((this.addEmp.nativeElement.value || this.addEmp.nativeElement.value==='' )    && !this.isAddFormSubmit ){
        return confirm("You discard without Add Employee")
      }else{
        return true
      }
    }
    else{
      return true
    }

  }


  addEmployee(name:string){
    this.service.addAdminemployee(name)
    this.isAddFormSubmit=true
    if(name!=''){
      this.service.addEmployeeFormOpen=false
    }
    if(name===''){
      this.isAddFormSubmit=false
    }
}

closeForm(){
  if(this.CanDeactivateAccess()){
    this.service.addEmployeeFormOpen=false
  }
}

myFavourite(user:UserData){
  
  // let index =  this.service.TempData.findIndex(e=>{
  //   return e.userid===user.userid
  // })

  this.service.setFavourite(user)
  // this.fvrt=true
  // console.log(index);
  // this.service.TempData[index]
  
}

}
