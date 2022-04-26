import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Invoice } from './../models/invoice';
 
@Injectable({
  providedIn: 'root'
})
export class InvoiceServicesService {

  invs:Invoice[]=[];

  constructor(public http: HttpClient) { }

  private baseURL: string = "http://localhost:8080/invoices";

  // private baseURL: string = "";
  //public objectID = require("bson-objectid");

  getInvoices() {
    return this.http.get<Invoice[]>(this.baseURL);
  }
  
  addInvoice(inv: Invoice) {
    return this.http.post<Invoice>(this.baseURL, inv);
  }

  editInvoice(inv: Invoice) {
    return this.http.put<Invoice>(`${this.baseURL}`, inv);
  
  }

  
  getInvoiceByID(id:string){
    console.log(id)
    return this.http.get<Invoice>(`${this.baseURL}/${id}`)
  
  }
}
