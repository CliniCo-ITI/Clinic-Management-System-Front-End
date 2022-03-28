import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'src/app/invoice.service';
import { Invoice } from 'src/app/_models/invoice';
import { Router } from '@angular/router';
import {Schema} from 'mongoose';
import ObjectID from 'bson-objectid';
@Component({
  selector: 'app-invoice-add',
  templateUrl: './invoice-add.component.html',
  styleUrls: ['./invoice-add.component.css']
})
export class InvoiceAddComponent implements OnInit {

  invoice:Invoice = new Invoice("","",0,0,0);
  constructor(public invServ:InvoiceService,public router:Router) { }

  addInvoice(){
    this.invServ.addInvoice(this.invoice).subscribe(a => {console.log(a)});
    this.router.navigateByUrl("/invoiceList");
  }
  ngOnInit(): void {
  }
  goBack(){
    this.router.navigateByUrl("/invoiceList");
  }
}



