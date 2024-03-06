import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators,FormControl } from '@angular/forms';
import validateForms from '../../helpers/validateForms';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  type:string ="password"
  isText:boolean = false;
  eyeIcon:string = "fa-eye-slash"
  loginObj : any = {
    "userName":"",
    "password":""
  }
  signUpForm!: FormGroup;


  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required],
      confirmpass:['',Validators.required]
    });
  }
  HideShowPass(){
    this.isText =!this.isText;
    this.isText? this.eyeIcon= "fa-eye" : this.eyeIcon="fa-eye-slash"
    //this.type = this.type =="password" ?  "text" : "password";
    this.isText ? this.type ="text" : this.type = "password"
  }
  onRegister(){
    if(this.signUpForm.valid){
      if(this.signUpForm.value.password == this.signUpForm.value.confirmpass )
      {
        this.auth.signUp(this.signUpForm.value)
        .subscribe(
          {
            next:(resSucess)=>{
              console.log(resSucess);
            },
            error:(resError)=>{
              console.log(resError)
            }
          }
        )
      }else{
        alert("please you Enter a pass word not like confim")
      }

    }else{
      validateForms.ValidateAllFormFields(this.signUpForm);
    }
  }
  constructor(private fb:FormBuilder, private auth:AuthService){}
  

}
