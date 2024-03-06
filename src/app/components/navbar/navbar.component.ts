import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { UserStoreService } from '../../services/userstore/user-store.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  constructor(protected auth:AuthService,
              private  router:Router,
              private userStore:UserStoreService){}

userData:any;
email:string="guest@gmail.com"
role:string="guest"

  ngOnInit(): void {
    if(this.auth.checkUserLogin() != false){
      this.userStore.getEmailFromStore()
      .subscribe(
        {
          next:(val)=>{
            let emailfromauth = this.auth.getfullNameFromToken();

            this.email = val || emailfromauth
          }
        }
      )


      this.userStore.getRoleFromStore()
      .subscribe(
        {
          next:(val)=>{
            let roleFromAuth = this.auth.getRoleFromToken()
            this.role = val || roleFromAuth
          }
        }
      )
     }else{
      this.router.navigateByUrl('login')
    }
  }
}
