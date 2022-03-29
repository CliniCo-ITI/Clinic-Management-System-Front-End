import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Clinc } from '../../../models/clinic';
import { Receptionist } from '../../../models/receptionist';
import { User } from '../../../models/user';
import { RecepService } from '../../services/recep.service';

@Component({
  selector: 'app-receptionist-details',
  templateUrl: './receptionist-details.component.html',
  styleUrls: ['./receptionist-details.component.css']
})
export class ReceptionistDetailsComponent implements OnInit {
  id:string = "";
  imagePath:string = "";
  public retrievedRecep = new Receptionist("","","","","","",0,"","","","",3000,new Clinc("","","","","",[]),new User("","","","","","",0,"","",""));

  constructor(public recepService:RecepService, private route: Router,
    public activatedRoute: ActivatedRoute) {
      this.id = this.route.url.split('/')[3]; //get id parameter

     }

  ngOnInit(): void {
    this.recepService.getRecepById(this.id).subscribe({
      next : data => {this.retrievedRecep = data;console.log(this.retrievedRecep)}
    })
  }


}
