import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Invoice } from './../../models/invoice';
import { InvoiceServicesService } from './../../services/invoice-services.service';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {

  invs:Invoice [] = [];
  invoice:Invoice=new Invoice("0","",0,0,0);
  constructor(public invServ:InvoiceServicesService,public router:Router,public ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.invServ.getInvoices().subscribe({
      next:a=>{this.invs=a}
      
    });
    console.log(this.invoice._id)


    this.ar.params.subscribe(a =>{
     console.log(a['id']);
    })
  }

  edit(){
    this.router.navigate(['/invoice/edit']);
  }

}
