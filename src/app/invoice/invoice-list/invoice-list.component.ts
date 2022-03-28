import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'src/app/invoice.service';
import { Invoice } from 'src/app/_models/invoice';
import { ActivatedRoute, Router } from '@angular/router';
import { time } from 'console';
import { threadId } from 'worker_threads';
import ObjectID from 'bson-objectid';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {

 


  invs:Invoice [] = [];
  invoice:Invoice=new Invoice("0","",0,0,0);
  constructor(public invServ:InvoiceService,public router:Router,public ar:ActivatedRoute) { }

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
