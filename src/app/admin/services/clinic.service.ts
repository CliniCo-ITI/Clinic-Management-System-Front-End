import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Clinc } from '../../models/clinic';


@Injectable({
  providedIn: 'root'
})
export class ClinicService {
  private httpOptions = {
    headers: new HttpHeaders({
      'content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyM2I5NGRjOTM4YWEwNDFmNjdjZmQ1YiIsImZuYW1lIjoiTmFkYSIsImxuYW1lIjoiTWFtZG91aCIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwidXNlclR5cGUiOiJhZG1pbiIsImlhdCI6MTY0ODEzMTI1OH0.87RiBuPxEi0secbsFgh3JYK_o_NwOK6bk6g0agG2LDI'
    }),

  }
  private baseUrl:string = 'http://localhost:8080/admin/clinics'

  getCliincs(){
   return this.http.get<Clinc[]>(this.baseUrl,this.httpOptions);
  }

  getClinicById(id:string){
   return this.http.get<Clinc>(`${this.baseUrl}/${id}`,this.httpOptions)
  }
  addClinc(clinic:Clinc){
    return this.http.post<Clinc>(this.baseUrl,clinic,this.httpOptions)
  }

  editClinic(id:string,clinic:Clinc){
    return this.http.put<Clinc>(`${this.baseUrl}/${id}`,clinic,this.httpOptions);
  }

  deleteClinic(id: string) {
    return this.http.delete(`${this.baseUrl}/${id}`,this.httpOptions);
  }
  constructor(public http:HttpClient) { }
}
