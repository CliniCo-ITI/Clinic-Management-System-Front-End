import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { timeStamp } from 'console';
import { ReceptionistService } from 'src/app/receptionist.service';
import { Appointment } from 'src/app/_models/appointment';

@Component({
  selector: 'app-doctor-appointment',
  templateUrl: './doctor-appointment.component.html',
  styleUrls: ['./doctor-appointment.component.css']
})
export class DoctorAppointmentComponent implements OnInit {

  clinicID = (this.route.snapshot.paramMap.get('id'));


  appointment:Appointment=new Appointment("",new Date(),true,true,[],[],[]);

    appointments:Appointment [] = [];

  constructor(public recepServ:ReceptionistService,
    public router:Router,
    public route:ActivatedRoute,
    public ar:ActivatedRoute
    ) { }

    
  ngOnInit(): void {
    if(this.clinicID != ""){
         

      this.recepServ.getAppointmentDoctor(this.clinicID!).subscribe({
        next:(res) =>{
          console.log("tmam");
          console.log(res._id);
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



