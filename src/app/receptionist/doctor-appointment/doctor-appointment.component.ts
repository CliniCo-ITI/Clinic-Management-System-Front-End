import { Component, OnInit } from '@angular/core';
import { ReceptionistServiceService } from './../../services/receptionist-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from 'app/models/appointments';

@Component({
  selector: 'app-doctor-appointment',
  templateUrl: './doctor-appointment.component.html',
  styleUrls: ['./doctor-appointment.component.css']
})
export class DoctorAppointmentComponent implements OnInit {

  recepID = window.localStorage.getItem('recepId');

  appointment: Appointment = new Appointment("", new Date(), true, true, [], [], []);

  appointments: Appointment[] = [];
  constructor(
    public recepServ: ReceptionistServiceService,
    public router: Router,
    public route: ActivatedRoute,
    public ar: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.warn(this.recepID);
    if(this.recepID != ""){
         

      this.recepServ.getAppointmentDoctor(this.recepID!).subscribe({
        next:(res) =>{
          console.log("tmam");
          console.log(res);
          this.appointments.push(res);
        },
        error:(err)=>{
          console.log(err);
        },
        complete:()=>{
          console.log("get appointment");
        }
      })
    }
  }
}
