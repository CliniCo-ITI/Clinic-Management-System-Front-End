import { Component, OnInit } from '@angular/core';
import { Invoice } from './../../models/invoice';
import { InvoiceServicesService } from './../../services/invoice-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice-add',
  templateUrl: './invoice-add.component.html',
  styleUrls: ['./invoice-add.component.css']
})
export class InvoiceAddComponent implements OnInit {

  invoice:Invoice = new Invoice("","",0,0,0);
  constructor(public invServ:InvoiceServicesService,public router:Router) { }

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
