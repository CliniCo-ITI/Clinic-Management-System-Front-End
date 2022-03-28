import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReceptionistService } from 'src/app/receptionist.service';
import { Appointment } from 'src/app/_models/appointment';

@Component({
  selector: 'app-doctor-appointment',
  templateUrl: './doctor-appointment.component.html',
  styleUrls: ['./doctor-appointment.component.css']
})
export class DoctorAppointmentComponent implements OnInit {

  clinicID = this.route.snapshot.paramMap.get('id');


  appointment:Appointment=new Appointment("",new Date(),true,true,[],[],[]);



  constructor(public recepServ:ReceptionistService,
    public router:Router,
    public route:ActivatedRoute,
    public ar:ActivatedRoute
    ) { }

    
  ngOnInit(): void {

    if(this.clinicID != ""){
      
    }
  }

}




