import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/shared/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  constructor(private userSer:UserService) { }

  ngOnInit(): void {
  }
  login(){
    return this.userSer.userExist();
  }
  logout(){
    this.userSer.clear();

  }

}
