import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorAppointmentComponent } from './doctor-appointment/doctor-appointment.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceListComponent } from './../invoice/invoice-list/invoice-list.component';
import { InvoiceEditComponent } from './../invoice/invoice-edit/invoice-edit.component';
import { InvoiceAddComponent } from './../invoice/invoice-add/invoice-add.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: "profile", component: ProfileComponent },
  { path: "invoice/list", component: InvoiceListComponent },
  { path: "invoice/edit", component: InvoiceEditComponent },
  { path: "invoice/add", component: InvoiceAddComponent },
  { path: "doctorAppointment", component: DoctorAppointmentComponent }
]

@NgModule({
  declarations: [
    DoctorAppointmentComponent,
    InvoicesComponent,
   
    SidebarComponent,
         ProfileComponent
  ],
  imports: [

    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports:[ProfileComponent]
})
export class ReceptionistModule { }
