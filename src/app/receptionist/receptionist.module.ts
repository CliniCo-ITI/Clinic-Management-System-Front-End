import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { DoctorAppointmentComponent } from './doctor-appointment/doctor-appointment.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceModule } from '../invoice/invoice.module';
import { InvoiceListComponent } from '../invoice/invoice-list/invoice-list.component';
import { InvoiceAddComponent } from '../invoice/invoice-add/invoice-add.component';
import { InvoiceEditComponent } from '../invoice/invoice-edit/invoice-edit.component';



const routes:Routes=[
  {path:"profile",component:ProfileComponent},
  {path:"invoice/list",component:InvoiceListComponent},
  {path:"invoice/edit",component:InvoiceEditComponent},
  {path:"invoice/add",component:InvoiceAddComponent},
  {path:"doctorAppointment",component:DoctorAppointmentComponent}
]

@NgModule({
  declarations: [
    ProfileComponent,
    DoctorAppointmentComponent,
    InvoiceComponent
  ],
  imports: [
    CommonModule,
    InvoiceModule,
    RouterModule.forRoot(routes)
  ],
  exports:[ProfileComponent]
})
export class ReceptionistModule { }
