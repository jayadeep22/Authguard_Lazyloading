import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  setToken(token:string){
    localStorage.setItem("token",token)
  }
  getToken(){
    return localStorage.getItem("token");
  }
  login(data:any):any{
    if(data.email=="admin@gmail.com" && data.password=="admin"){
      this.setToken("fsdffsdffsdffsdffsdffsdffsdfsfsd");
      return {status:"success",data:{name:"Jaydeep",email:"admin@gmail.com",usertype:"Admin"}};
    }
    else{
      return{status:"failed"};
    }
  }
}
