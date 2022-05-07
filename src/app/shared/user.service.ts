import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LOGIN_TYPE } from 'app/models/login';
import { USER_LOGIN_TYPE } from 'app/models/user.login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl:string = 'http://localhost:8080/';
  private adminId:string = "";
  constructor(private router:Router,private http:HttpClient) { }
  setUser(data:LOGIN_TYPE):void{
    window.localStorage.setItem('token',`Bearer ${data.token}`);
    window.localStorage.setItem('user',JSON.stringify(data.user) )
    console.log('from userLogin',data);
  }
  getUser(): USER_LOGIN_TYPE|null{
    const userData = window.localStorage.getItem('user')
    if(!userData){
      return null;
    }
    return JSON.parse(userData);
  }
  getUserToken():string{
    return window.localStorage.getItem('token') || '';
  }
  userExist():boolean{
    return this.getUser() !==  null;
  }

  getAdminById():Observable<any> {
    let admin:any = JSON.parse(window.localStorage.getItem('user') || '{}');
    this.adminId = admin.id;
    return this.http.get(`${this.baseUrl}admin/profile/${this.adminId}`,{
      headers:{
       authorization: this.getUserToken(),
      }
    });
  }

  clear(){
    window.localStorage.removeItem('user');
    window.localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }

}
