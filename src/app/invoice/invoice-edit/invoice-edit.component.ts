import { Component, OnInit } from '@angular/core';
import { InvoiceServicesService } from './../../services/invoice-services.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Invoice } from './../../models/invoice';

@Component({
  selector: 'app-invoice-edit',
  templateUrl: './invoice-edit.component.html',
  styleUrls: ['./invoice-edit.component.css']
})
export class InvoiceEditComponent implements OnInit {

  constructor(
    public invServ:InvoiceServicesService,
    public router: Router, 
    public ar: ActivatedRoute,
    public route:ActivatedRoute
  ) { }

  invoiceID = (this.route.snapshot.paramMap.get('id'));

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
            console.log("I am Here !!!");
            console.log(err);
          },
          complete:() => {
            console.log("updated one");
          }
        })
      })
     
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
          console.log("i am here !!!");
          console.log(err);
        },
        complete:()=>{
          console.log("get one");
        }
      })
    }

  
  }
}
