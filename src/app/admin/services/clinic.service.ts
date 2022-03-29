import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Clinc } from '../../models/clinic';


@Injectable({
  providedIn: 'root'
})
export class ClinicService {
  private baseUrl:string = 'http://localhost:8080/admin/clinics'

  getCliincs(){
   return this.http.get<Clinc[]>(this.baseUrl);
  }

  getClinicById(id:string){
   return this.http.get<Clinc>(`${this.baseUrl}/${id}`)
  }
  addClinc(clinic:Clinc){
    return this.http.post<Clinc>(this.baseUrl,clinic)
  }

  editClinic(id:string,clinic:Clinc){
    return this.http.put<Clinc>(`${this.baseUrl}/${id}`,clinic);
  }

  deleteClinic(id: string) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  constructor(public http:HttpClient) { }
}
