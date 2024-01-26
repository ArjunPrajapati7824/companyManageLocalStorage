import { UserData } from "../Models/UserData";

export class userDataService{

  id=0
    TempData:UserData[]=[
      {userid:1,username:'Arjun',userrole:'user',password:''},
      {userid:2,username:'Manthan',userrole:'user',password:''},
      {userid:3,username:'Jeel',userrole:'user',password:''},
      {userid:4,username:'Mayur',userrole:'user',password:''},
      {userid:5,username:'Meet',userrole:'user',password:''}
    ]

    UserDataRegister:UserData[]=[
        {userid:101,username:'SuperAdmin',userrole:'SuperAdmin',password:'0000'},
        {userid:201,username:'Admin',userrole:'Admin',password:'0000'},
    ]


    addDataLocalStorage(username:string,password:string,userrole:string){
      this.UserDataRegister.push({userid:++this.id,username:username,password:password,userrole:userrole})
    //   console.log(this.UserDataRegister);
      
      localStorage.setItem('UserData',JSON.stringify(this.UserDataRegister))

    }

    getLocalUserData(){
        return localStorage.getItem('UserData')
    }

    getData(){
        return this.TempData
    }

    updateData(refid:number,idnew:string,namenew:string,rolenew:string){

        this.TempData[refid].userid=Number(idnew)
        this.TempData[refid].username=namenew
        this.TempData[refid].userrole=rolenew
        // this.TempData.splice(refid,1)
        // this.TempData.splice(refid,0,{userid:Number(idnew),username:namenew,userrole:rolenew,password:'',isLoggedin:false})

    }

    deleteData(id:number){
        this.TempData.splice(id,1)

    }
}

