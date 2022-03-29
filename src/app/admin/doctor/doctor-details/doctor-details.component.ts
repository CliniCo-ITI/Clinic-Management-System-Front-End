import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Clinc } from '../../../models/clinic';
import { Doctor } from '../../../models/doctor';
import { User } from '../../../models/user';
import { DoctorService } from '../../services/doctor.service';
@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {
  id:string = "";
  imagePath:string = "";
  pplPath:string = "";
  public retrievedDoc =  new Doctor("","","","","","",20,"","","","",100,"","",new Clinc("","","","","",[]),new User("","","","","","",0,"","",""));


  constructor(public docService:DoctorService, private route: Router,
    public activatedRoute: ActivatedRoute) {
      this.id = this.route.url.split('/')[3]; //get id parameter
      console.log(this.id);
     }

  ngOnInit(): void {
    this.docService.getDocById(this.id).subscribe({
            next : data => {this.retrievedDoc = data;console.log(this.retrievedDoc)}
          })
  }

}

// import { Component, OnInit } from '@angular/core';


// @Component({
//   selector: 'app-receptionist-details',
//   templateUrl: './receptionist-details.component.html',
//   styleUrls: ['./receptionist-details.component.css']
// })
// export class ReceptionistDetailsComponent implements OnInit {
//   id:string = "";
//   imagePath:string = "";
//   public retrievedRecep = new Receptionist("","","","","","",0,"","","","",3000,new Clinic("","","","","",[]),new User("","","","","","",0,"","",""));

//   constructor(public recepService:RecepService, private route: Router,
//     public activatedRoute: ActivatedRoute) {
//       this.id = this.route.url.split('/')[3]; //get id parameter

//      }

//   ngOnInit(): void {
//     this.recepService.getRecepById(this.id).subscribe({
//       next : data => {this.retrievedRecep = data;console.log(this.retrievedRecep)}
//     })
//   }


// }
