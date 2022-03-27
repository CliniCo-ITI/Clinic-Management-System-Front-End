import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Doctor_Type } from 'src/app/models/doctor';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  doctors:Doctor_Type[]|any = []
  constructor(public doctorSer :DoctorService,public router:Router,public ar:ActivatedRoute) { }


  ngOnInit(): void {
    this.doctorSer.getAllDoctors().subscribe(
      {next:data=>{this.doctors=data;console.log(this.doctors)}}
      )
  }
}
