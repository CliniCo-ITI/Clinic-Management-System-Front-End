import { Component, OnInit } from '@angular/core';
// import { UserService } from 'app/shared/user.service';
import { User } from './../../models/user';
import { UserService } from 'app/shared/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public baseUrl:string = 'http://localhost:8080/';
  public retrievedAdmin:User|null = new User("","","","","","",20,"","","") ;
  constructor(public userSer:UserService) { }

  ngOnInit(): void {
    this.userSer.getAdminById().subscribe({
      next : data => {this.retrievedAdmin = data;console.log(this.retrievedAdmin);console.log(this.retrievedAdmin?.image)}
    })

  }
  getProfileData(){

  }
}
