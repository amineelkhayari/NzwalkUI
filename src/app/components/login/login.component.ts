import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import validateForms from '../../helpers/validateForms';
import { AuthService } from '../../services/auth.service';
import { UserStoreService } from '../../services/userstore/user-store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  constructor(  private fb:FormBuilder,
                private auth:AuthService,
                private router:Router,
                private userStore:UserStoreService ){

  }
  ngOnInit(): void {
    if(sessionStorage.getItem("loginID"))
    this.router.navigateByUrl("dashboard");

    
    this.loginForm = this.fb.group({
      userName:['',Validators.required],
      password:['',Validators.required]
    })
  }
  loginForm!:FormGroup;
  type:string ="password"
  isText:boolean = false;
  eyeIcon:string = "fa-eye-slash"
  loginObj : any = {
    "id": 5,
    "name": "text",
    "email": "Jayne_Kuhic@sydney.com",
    "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
    }
    userPoyload:any;
    fullName:string='';
    role:string='';
  HideShowPass(){
    this.isText =!this.isText;
    this.isText? this.eyeIcon= "fa-eye" : this.eyeIcon="fa-eye-slash"
    //this.type = this.type =="password" ?  "text" : "password";
    this.isText ? this.type ="text" : this.type = "password"
  }
  onLogin(){
    //check form is filledor not
    if(this.loginForm.valid){
      alert('Login')
      this.auth.login(this.loginForm.value)
      .subscribe(
        {
          next:(resSucess)=>{
            console.log(resSucess);
            this.loginForm.reset();

            if(resSucess.jwtToken)
            {
             sessionStorage.setItem("loginID",resSucess.jwtToken);
             localStorage.setItem('userData',resSucess.jwtToken);
              const poyload = this.auth.decodeToken();
              this.userStore.setEmailFroStore(poyload["Email"]);
              this.userStore.setRoleFroStore(poyload["role"]);
             this.userStore.getEmailFromStore()
             .subscribe(val=>{
               const fullNameFromToken = this.auth.getfullNameFromToken();
               this.fullName = val || fullNameFromToken
             });
         
             this.userStore.getRoleFromStore()
             .subscribe(val=>{
               const getRoleFromToken = this.auth.getRoleFromToken();
               this.role = val || getRoleFromToken
             });
         
            this.router.navigateByUrl('dashboard');
            }
          },
          error:(resError)=>{
            console.log("error",resError)
          }
        }
      )
    }else {
      validateForms.ValidateAllFormFields(this.loginForm);
      alert("form invalid")
    }
   
  }
 

}
