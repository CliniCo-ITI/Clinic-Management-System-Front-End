import { Injectable } from '@angular/core';
import {Doctor_Type} from './../../models/doctor'
import {HttpClient,HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DoctorService {

constructor(private http: HttpClient) { }
 private  _docors:Doctor_Type[] = [];

 baseUrl:string = 'http://localhost:8080/admin/doctor';

 getAllDoctors(){
  return this.http.get<Doctor_Type[]>(this.baseUrl)
}

addDoctor(doctor:Doctor_Type){
  return this.http.post<Doctor_Type>(this.baseUrl,doctor);
}

getDoctorById(id:string){
  return this.http.get<Doctor_Type>(`${this.baseUrl}/${id}`)
 }


 editdepartment(id:string,doctor:Doctor_Type){
   return this.http.put<Doctor_Type>(`${this.baseUrl}/${id}`,doctor);
 }

  get doctor(){
    return this._docors.slice();
  }

}

