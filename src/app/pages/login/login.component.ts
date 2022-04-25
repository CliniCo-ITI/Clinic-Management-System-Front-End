import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LOGIN_TYPE } from 'app/models/login';
import { USER_LOGIN_TYPE } from 'app/models/user.login';
import { LoginService } from 'app/shared/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // public newLogin = new LOGIN_TYPE("","","","","","",new USER_LOGIN_TYPE("","","","",""));
  email:string = '';
  password:string = '';
  constructor(private loginSer:LoginService) { }

  ngOnInit(): void {
  }

  loginform=new FormGroup({
    username:new FormControl(''),
    password:new FormControl('')
  })
  userLogin(){
     if(this.loginform.valid){
      this.loginSer.login({email:this.email,password:this.password});

     }
  }
}
