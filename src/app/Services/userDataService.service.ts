import { UserData } from "../Models/UserData";

export class userDataService{

    TempData:UserData[]=[
      {userid:1,username:'Arjun',userrole:'user',password:''},
      {userid:2,username:'Manthan',userrole:'user',password:''},
      {userid:3,username:'Jeel',userrole:'user',password:''},
      {userid:4,username:'Mayur',userrole:'user',password:''},
      {userid:5,username:'Meet',userrole:'user',password:''},
      {userid:6,username:'Meet',userrole:'user',password:''},
      {userid:7,username:'Meet',userrole:'user',password:''},
      {userid:8,username:'Meet',userrole:'user',password:''},
    ]


    addData(){

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

