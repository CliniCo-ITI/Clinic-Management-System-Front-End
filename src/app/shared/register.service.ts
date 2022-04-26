import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private baseUrl:string = 'http://localhost:8080/register';
  constructor( public http: HttpClient){}
  signUp(newPat:any){
    return this.http.post(`${this.baseUrl}`,newPat);

  }
}
