import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
//private baseUrl:string = "https://socialmedia-d09b0c.ingress-haven.ewp.live/wp-json/account/register/";
  private baseUrl:string = "https://localhost:44398/api/Auth/Login";
  private userPoyload:any;
  constructor(private http:HttpClient, private router:Router) { 
    this.userPoyload = this.decodeToken();
  }
  signUp(userObj:any){
    return  this.http.post<any>(this.baseUrl,userObj);
   
  }
  logout(){
    sessionStorage.removeItem('loginID');
    localStorage.removeItem('userData');
    this.router.navigateByUrl("login");
  }
  checkUserLogin(){
    if( sessionStorage.getItem("loginID") && localStorage.getItem("userData")){
      return localStorage.getItem('userData');
    }else
     return false;
    }
  
  login(userObj:any){
    return  this.http.post<any>(this.baseUrl,userObj);
    /*
    .subscribe(
      (resSucess)=>{
        console.log(resSucess)
      },
      (resError)=>{
        console.log(resError);
      }
    )*/
  }
  decodeToken(){
    const jwtHelper = new JwtHelperService();
    const mytoken:any = localStorage.getItem("userData");
    let userData:any = jwtHelper.decodeToken(mytoken);
    return userData ;
  }
  getfullNameFromToken(){
    if(this.userPoyload)
    return this.userPoyload["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"];
  }

  getRoleFromToken(){
    if(this.userPoyload)
    return this.userPoyload["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
  }
}
