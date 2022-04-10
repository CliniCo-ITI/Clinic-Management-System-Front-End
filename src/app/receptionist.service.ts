import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from './_models/appointment';


@Injectable({
  providedIn: 'root'
})
export class ReceptionistService {


  private baseURL: string = "http://localhost:8080/admin/clinics";

  constructor(public http:HttpClient) { }

  getAppointmentDoctor(id:string){
  

    return this.http.get<Appointment>(`${this.baseURL}/${id}`)
  }

}
