import { UserData } from '../Models/UserData';

export class authService{


  isLoggedin:boolean=false
  arfinal:UserData[]=[]
  index:number=0
  canAddUser:boolean=false
  canAddifemp:boolean=false


  authLogin(username:string,password:string):boolean{
    
        let UserData=localStorage.getItem("UserData")
        console.log(UserData);
       
      if(UserData){
        this.arfinal=JSON.parse(UserData)
        this.index= this.arfinal.findIndex(ele=>{
          return ele.username===username && ele.password===password
        })
        console.log(this.index);
        
        if(this.index!=-1){
          const authToken = "AuthTokenKey"
          this.isLoggedin=true
          sessionStorage.setItem("loggedUser",JSON.stringify(this.arfinal[this.index]))
          localStorage.setItem("token",JSON.stringify(authToken))
          console.log(this.arfinal);
          
          localStorage.setItem("UserData",JSON.stringify(this.arfinal))
      
        }
      

    }
    if(this.isLoggedin){
        return true
    }else{
        return false
    }

  }
  getToken(){
    return localStorage.getItem('token')
}



  loggedUser!: UserData;
  welcomeName: string | null = '';
  userRole:string|null=null

  getLoggedUser(){
    const checkUser = sessionStorage.getItem('loggedUser');

    if (checkUser) {
     this.loggedUser = JSON.parse(checkUser);
      this.welcomeName = this.loggedUser.username;
      this.userRole=this.loggedUser.userrole
      console.log(this.userRole==="SuperAdmin");
      
      if(this.userRole==="SuperAdmin"){
        this.canAddUser=true
      }
    }

  }

  // userPermission=[
  //   {"Admin":["comp","branch"]},
  //   {"user":["emp"]},
  //   {"SuperAdmin":["emp,comp,branch"]},
  // ]


  userPermission=[
    {"Admin":"Access"},
    {"user":"NotAccess"},
    {"SuperAdmin":"NotAccess"},
  ]


}

 
