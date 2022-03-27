import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medicin } from 'src/app/models/medicin';


@Injectable({
  providedIn: 'root'
})
export class MedicinService {
  private baseUrl:string = 'http://localhost:8080/admin/medicines'

  getMedicins(){
   return this.http.get<Medicin[]>(this.baseUrl);
  }

  getMedicinById(id:string){
   return this.http.get<Medicin>(`${this.baseUrl}/${id}`)
  }
  addMedicin(medicin:Medicin){
    return this.http.post<Medicin>(this.baseUrl,medicin)
  }

  editMedicin(id:string,medicin:Medicin){
    return this.http.put<Medicin>(`${this.baseUrl}/${id}`,medicin);
  }

  deleteMedicin(id: string) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  constructor(public http:HttpClient) { }
}
