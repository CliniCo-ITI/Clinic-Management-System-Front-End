import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { DoctorComponent } from './doctor/doctor.component';
import { ReceptionistListComponent } from './receptionist/receptionist-list/receptionist-list.component';
import { ReceptionistAddComponent } from './receptionist/receptionist-add/receptionist-add.component';
import { ReceptionistEditComponent } from './receptionist/receptionist-edit/receptionist-edit.component';
import { MedicineComponent } from './medicine/medicine.component';
import { ReportListComponent } from './report/report-list/report-list.component';
import { ClinicAddComponent } from './clinic/clinic-add/clinic-add.component';
import { ClinicListComponent } from './clinic/clinic-list/clinic-list.component';
import { ClinicEditComponent } from './clinic/clinic-edit/clinic-edit.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    DoctorComponent,
    ReceptionistListComponent,
    ReceptionistAddComponent,
    ReceptionistEditComponent,
    MedicineComponent,
    ReportListComponent,
    ClinicAddComponent,
    ClinicListComponent,
    ClinicEditComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
