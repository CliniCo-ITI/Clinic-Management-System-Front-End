import { Component, OnInit } from '@angular/core';
import { ReceptionistServiceService } from './../../services/receptionist-service.service';
import { Receptionist } from './../../models/receptionist';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  
  constructor(public RecepService:ReceptionistServiceService) { }

  session:any;
 
  public obj:Receptionist|null = null;
  
  ngOnInit(): void {
   

    this.RecepService.getReceptionistById().subscribe({
      next:data=>{
        this.obj=data;console.log(this.obj);
        
        window.localStorage.setItem('recepId',`${this.obj?._id}`);
      }
    })

   

  }

}
