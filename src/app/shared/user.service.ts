import { Injectable } from '@angular/core';
import { LOGIN_TYPE } from 'app/models/login';
import { USER_LOGIN_TYPE } from 'app/models/user.login';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  setUser(data:LOGIN_TYPE):void{
    window.localStorage.setItem('token',data.token);
    window.localStorage.setItem('user',JSON.stringify(data.user) )
    console.log('from userLogin',data);
  }
  getUserr(): USER_LOGIN_TYPE|void{}
  userExist(){}

}
