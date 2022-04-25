import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../services/doctor.service';
import { Doctor} from '../../../models/doctor';


@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
  doctors: Doctor[] |any = [];
  retrievedDoctor: Doctor|any;
  constructor( public docService:DoctorService) { }
  ngOnInit(): void {
    this.docService.getAllDoctors().subscribe({
      next:data => {this.doctors = data;console.log(this.doctors)}
    })
  }
  deleteDoc(_id:string){
    this.docService.deleteDoctor(_id).subscribe({
      next:response => {console.log(response);
      }
    })
  }
}
