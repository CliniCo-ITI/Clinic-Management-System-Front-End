import { Injectable } from '@angular/core';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Appointment } from './../models/appointments';
import { Observable } from 'rxjs';
import { UserService } from 'app/shared/user.service';

@Injectable({
  providedIn: 'root'
})
export class ReceptionistServiceService {
  private baseURL: string = "http://localhost:8080/";
  constructor(public http:HttpClient,public userLoginSer:UserService) { }

  getAppointmentDoctor(id:string){
  

   return this.http.get<Appointment>(`${this.baseURL}appointments/recep/${id}`)
  }


  private receptionistID:string ="";
  
  getReceptionistById():Observable<any>{
    
    let receptionist:any = JSON.parse(window.localStorage.getItem('user') || '{}');
    this.receptionistID = receptionist.id;
    return this.http.get(`${this.baseURL}receptionist/${this.receptionistID}`,{
      headers:{
       authorization: this.userLoginSer.getUserToken(),
      }
    });
    
  }
}
