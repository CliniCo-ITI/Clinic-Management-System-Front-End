import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'src/app/invoice.service';
import { Invoice } from 'src/app/_models/invoice';
import { ActivatedRoute, Router} from '@angular/router';
import { Schema } from 'mongoose';
import ObjectID from 'bson-objectid';
import { nextTick } from 'process';
@Component({
  selector: 'app-invoice-edit',
  templateUrl: './invoice-edit.component.html',
  styleUrls: ['./invoice-edit.component.css']
})
export class InvoiceEditComponent implements OnInit {

  constructor(public invServ: InvoiceService, 
    public router: Router, 
    public ar: ActivatedRoute,
    public route:ActivatedRoute
    ) { }

  invoiceID = (this.route.snapshot.paramMap.get('id'));
  // invoiceID = this.route.params.subscribe(a=>{
  //   this.invoice._id=a['_id'];
  // })
  invoice: Invoice = new Invoice("","",0,0,0);
  invs:Invoice [] = [];

  public iid:string = "";



  edit() {
    if (confirm("Are you you sure to update this Invoice ?!")) {
      this.ar.params.subscribe(data =>{
        this.invServ.editInvoice(this.invoice).subscribe({
          next: res =>{
            console.log(res);
          },
          error: err =>{
            console.log(err);
          },
          complete:() => {
            console.log("updated one");
          }
        })
      })
      // this.invServ.editInvoice(this.invoice).subscribe(a => {
      //   console.log(a)
       
      // })
      this.router.navigateByUrl("/invoiceList");

    }
    else {
      this.router.navigateByUrl("/invoiceList");
    }

  }

  ngOnInit(): void {
    console.log(this.invoiceID);
    if(this.invoiceID != ""){
      this.invServ.getInvoiceByID(this.invoiceID!).subscribe({
        next: (res) =>{
          console.log(res);
          this.invoice=res;
        },
        error:(err) =>{
          console.log(err);
        },
        complete:()=>{
          console.log("get one");
        }
      })
    }

    // this.ar.params.subscribe(a => {
    //   //  this.invoice._id=a['_id']
    //   this.invoice.paymentMethod = a['_id'];

    //   // this.invoice.paymentMethod=a['_id'];
    //   //  this.invoice.paymentMethod=a['paymentMethod'];
    // })

    // this.invServ.getInvoices().subscribe({
    //   next:a=>{this.invs=a}
      
    // });
  }

}



