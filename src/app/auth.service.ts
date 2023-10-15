import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable ,BehaviorSubject, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient,private _Router:Router) { }

  login(data:string):Observable<any>{
    return this._HttpClient.post('https://note-sigma-black.vercel.app/api/v1/users/signIn',data)
  }
  register(data:string):Observable<any>{
   return this._HttpClient.post('https://note-sigma-black.vercel.app/api/v1/users/signUp',data)
  }
}
