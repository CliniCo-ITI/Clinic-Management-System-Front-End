import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from 'app/shared/user.service';
import { Clinc } from '../../models/clinic';


@Injectable({
  providedIn: 'root'
})
export class ClinicService {
  // private httpOptions = {
  //   headers: new HttpHeaders({
  //     'content-Type': 'application/json',
  //     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyM2I5NGRjOTM4YWEwNDFmNjdjZmQ1YiIsImZuYW1lIjoiTmFkYSIsImxuYW1lIjoiTWFtZG91aCIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwidXNlclR5cGUiOiJhZG1pbiIsImlhdCI6MTY0ODEzMTI1OH0.87RiBuPxEi0secbsFgh3JYK_o_NwOK6bk6g0agG2LDI'
  //   }),

  // }
  private baseUrl:string = 'http://localhost:8080/admin/clinics'

  getCliincs(){
   return this.http.get<Clinc[]>(this.baseUrl,{
    headers:{
     authorization: this.userLoginSer.getUserToken(),
    }
  });
  }

  getClinicById(id:string){
   return this.http.get<Clinc>(`${this.baseUrl}/${id}`,{
    headers:{
     authorization: this.userLoginSer.getUserToken(),
    }
  })
  }
  addClinc(clinic:Clinc){
    return this.http.post<Clinc>(this.baseUrl,clinic,{
      headers:{
        'content-Type': 'application/json',
       authorization: this.userLoginSer.getUserToken(),
      }
    })
  }

  editClinic(id:string,clinic:Clinc){
    return this.http.put<Clinc>(`${this.baseUrl}/${id}`,clinic,{
      headers:{
       authorization: this.userLoginSer.getUserToken(),
      }
    });
  }

  deleteClinic(id: string) {
    return this.http.delete(`${this.baseUrl}/${id}`,{
      headers:{
       authorization: this.userLoginSer.getUserToken(),
      }
    });
  }
  constructor(public http:HttpClient,public userLoginSer:UserService) { }
}
