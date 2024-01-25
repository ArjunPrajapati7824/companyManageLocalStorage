import { UserData } from '../Models/UserData';

export class authService{


  isLoggedin:boolean=false
  arfinal:UserData[]=[]
  index:number=0


  authLogin(username:string,password:string):boolean{
        let UserData=localStorage.getItem("UserData")
        console.log(UserData);
        // console.log(this.LoginArray.loginusername);
        // console.log(this.LoginArray.loginpassword);
        
      
        // UserData?.indexOf((ele)=>{})
      if(UserData){
        this.arfinal=JSON.parse(UserData)
        this.index= this.arfinal.findIndex(ele=>{
          return ele.username===username && ele.password===password
        })
        console.log(this.index);
        
        if(this.index!=-1){
          const authToken = "AuthTokenKey"
          this.isLoggedin=true
          localStorage.setItem("loggedUser",JSON.stringify(this.arfinal[this.index]))
          localStorage.setItem("token",JSON.stringify(authToken))
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

// isLoggedIn() {
//     return  this.getToken()
// }
}

 
