import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LOGIN_TYPE } from 'app/models/login';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient,private userLoginSer:UserService,private router:Router) { }
  private baseUrl:string = 'http://localhost:8080/login';
  login(data:{email:string,password:string}){
    this.http.post<LOGIN_TYPE>(this.baseUrl,data).subscribe(
     (data)=>{
        this.userLoginSer.setUser(data),
        console.log('from service',data);
        if(data.user.userType=='admin'){
          this.router.navigate(['/admin']);
        }

     }

  );
  }
}
