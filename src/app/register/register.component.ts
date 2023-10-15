import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private _authService:AuthService){}
  
  registerForm:FormGroup=new FormGroup({
    name:new FormControl(null,[Validators.required,Validators.minLength(3)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-z][a-z0-9]{8}$/)]),
    age:new FormControl(null,[Validators.required,Validators.minLength(1)]),
    phone:new FormControl(null,[Validators.required,Validators.minLength(11)])

  })


  register(registerForm:FormGroup){
    this._authService.register(registerForm.value).subscribe({
      next:(res)=>{
        console.log(res);
        
      } 
    })
  }
}
