import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
//import { Receptionist } from '../models/receptionist';
export class RecepService {
  // selectedRecep: Receptionist | any;
  // receps: Receptionist[] |any;
  // filteredReceps: Receptionist[] | any;
  private _searchTerm:String | any;
  readonly baseUrl = "http://localhost:8080/admin/receptionist/"
  constructor(private http: HttpClient) { }
  get searchTerm():String{
    return this._searchTerm;
  }
  getReceptionistData(){
    const httpOptions = {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyM2I5NGRjOTM4YWEwNDFmNjdjZmQ1YiIsImZuYW1lIjoiTmFkYSIsImxuYW1lIjoiTWFtZG91aCIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwidXNlclR5cGUiOiJhZG1pbiIsImlhdCI6MTY0ODEzMTI1OH0.87RiBuPxEi0secbsFgh3JYK_o_NwOK6bk6g0agG2LDI'
      })
    }
    return this.http.get("http://localhost:8080/admin/receptionist/6238d296b2953903e0f4e6e1",httpOptions)
    .pipe(catchError((erro)=>{
      console.log(erro)
      return throwError("error");
    }))
  }
}
