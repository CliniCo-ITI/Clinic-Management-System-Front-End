import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from 'app/shared/user.service';
import { Medicin } from '../../models/medicin';


@Injectable({
  providedIn: 'root'
})
export class MedicinService {
  // private httpOptions = {
  //   headers: new HttpHeaders({
  //     'content-Type': 'application/json',
  //     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyM2I5NGRjOTM4YWEwNDFmNjdjZmQ1YiIsImZuYW1lIjoiTmFkYSIsImxuYW1lIjoiTWFtZG91aCIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwidXNlclR5cGUiOiJhZG1pbiIsImlhdCI6MTY0ODEzMTI1OH0.87RiBuPxEi0secbsFgh3JYK_o_NwOK6bk6g0agG2LDI'
  //   }),

  // }
  private baseUrl:string = 'http://localhost:8080/admin/medicines'

  getMedicins(){
   return this.http.get<Medicin[]>(this.baseUrl,{
     headers:{
      authorization: this.userLoginSer.getUserToken(),
     }
   });
  }

  getMedicinById(id:string){
   return this.http.get<Medicin>(`${this.baseUrl}/${id}`,{
    headers:{
     authorization: this.userLoginSer.getUserToken(),
    }
  })
  }
  addMedicin(medicin:Medicin){
    return this.http.post<Medicin>(this.baseUrl,medicin,{
      headers:{
       authorization: this.userLoginSer.getUserToken(),
      }
    })
  }

  editMedicin(id:string,medicin:Medicin){
    return this.http.put<Medicin>(`${this.baseUrl}/${id}`,medicin,{
      headers:{
       authorization: this.userLoginSer.getUserToken(),
      }
    });
  }

  deleteMedicin(id: string) {
    return this.http.delete(`${this.baseUrl}/${id}`,{
      headers:{
       authorization: this.userLoginSer.getUserToken(),
      }
    });
  }
  constructor(public http:HttpClient,public userLoginSer:UserService) { }
}
