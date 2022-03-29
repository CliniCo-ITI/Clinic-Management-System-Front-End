import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { catchError, throwError,Observable } from 'rxjs';
import { Receptionist } from '../../models/receptionist';
import { ReceptionistAddComponent } from "../receptionist/receptionist-add/receptionist-add.component";
// import { FormGroup,FormBuilder } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class RecepService {
  // receps: Receptionist[] |any;
  // newRecep: Receptionist |any;
  // recepTobeEdited: Receptionist | any;
  // recepAddComponent: ReceptionistAddComponent|any ;
  private httpOptions = {
    headers: new HttpHeaders({
      // 'content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyM2I5NGRjOTM4YWEwNDFmNjdjZmQ1YiIsImZuYW1lIjoiTmFkYSIsImxuYW1lIjoiTWFtZG91aCIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwidXNlclR5cGUiOiJhZG1pbiIsImlhdCI6MTY0ODEzMTI1OH0.87RiBuPxEi0secbsFgh3JYK_o_NwOK6bk6g0agG2LDI'
    }),

  }
  public baseUrl = "http://localhost:8080/";
  constructor( public http: HttpClient) { }
  getReceptionists(){
    return this.http.get<Receptionist[]>(this.baseUrl+"admin/receptionist/",this.httpOptions)
  }
  addReceptionist(newRecep:any) {

    // formData.append('clinic',newRecep.clinic);
    return this.http.post(`${this.baseUrl}admin/receptionist/add`, newRecep,this.httpOptions);
  }
  getRecepById(id: string):Observable<any> {
    return this.http.get(`${this.baseUrl}admin/receptionist/${id}`,this.httpOptions);
  }
  updateRecep(recepid:string,recepTobeEdited:any){
    return this.http.put(`${this.baseUrl}admin/receptionist/${recepid}`,recepTobeEdited, this.httpOptions);
  }
  deleteReceptionist(id: string): Observable<any> {
      return this.http.delete(`${this.baseUrl}admin/receptionist/${id}`,this.httpOptions);
  }
}


