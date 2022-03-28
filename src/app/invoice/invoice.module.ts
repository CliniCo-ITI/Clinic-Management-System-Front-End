import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule,Routes } from '@angular/router';
import { InvoiceAddComponent } from './invoice-add/invoice-add.component';
import { InvoiceEditComponent } from './invoice-edit/invoice-edit.component';

 const routes:Routes =[
  {path:"invoiceList",component:InvoiceListComponent},
  {path:"EditInvoice",component:InvoiceEditComponent},
  {path:"addInvoice",component:InvoiceAddComponent},
 
  {path:"invoice/edit/:id",component:InvoiceEditComponent}
 ]

@NgModule({
  declarations: [
    InvoiceListComponent,
    InvoiceAddComponent,
    InvoiceEditComponent
  ],
  imports: [
    CommonModule,FormsModule,RouterModule,RouterModule.forRoot(routes)
  ],
  exports:[FormsModule,InvoiceAddComponent,InvoiceListComponent,InvoiceEditComponent]
})
export class InvoiceModule { }
