import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _authService:AuthService){

  }
  
  loginForm:FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-z][a-z0-9]{8}$/)]),
  })


  login(loginForm:FormGroup){
    this._authService.login(loginForm.value).subscribe({
      next:(res)=>{
        console.log(res);
        
      }
    })
  }
}
