import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ReceptionistListComponent } from './receptionist/receptionist-list/receptionist-list.component';
import { ReceptionistAddComponent } from './receptionist/receptionist-add/receptionist-add.component';
import { ReceptionistEditComponent } from './receptionist/receptionist-edit/receptionist-edit.component';
import { MedicineComponent } from './medicine/medicine.component';
import { ReportListComponent } from './report/report-list/report-list.component';
import { ClinicAddComponent } from './clinic/clinic-add/clinic-add.component';
import { ClinicListComponent } from './clinic/clinic-list/clinic-list.component';
import { ClinicEditComponent } from './clinic/clinic-edit/clinic-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReceptionistDetailsComponent } from './receptionist/receptionist-details/receptionist-details.component';
import { DoctorListComponent } from './doctor/doctor-list/doctor-list.component';
import { DoctorAddComponent } from './doctor/doctor-add/doctor-add.component';
import { DoctorDetailsComponent } from './doctor/doctor-details/doctor-details.component';
import { DoctorEditComponent } from './doctor/doctor-edit/doctor-edit.component';

import {HttpClientModule } from '@angular/common/http';
// import { AddDoctorComponent } from './doctor/add-doctor/add-doctor.component';
// import { FormsModule } from '@angular/forms';
import { ClinicDetailsComponent } from './clinic/clinic-details/clinic-details.component';
import { DeleteClinicComponent } from './clinic/delete-clinic/delete-clinic.component';
import { AddMedicinComponent } from './medicine/add-medicin/add-medicin.component';
import { MedicineDetailsComponent } from './medicine/medicine-details/medicine-details.component';
import { UpdateMedicinComponent } from './medicine/update-medicin/update-medicin.component';
import { DeleteMedicinComponent } from './medicine/delete-medicin/delete-medicin.component';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import * as i3 from "@angular/cdk/scrolling";
import {TableModule} from 'primeng/table';
import { SideBarComponent } from './side-bar/side-bar.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    ReceptionistListComponent,
    ReceptionistAddComponent,
    ReceptionistEditComponent,
    MedicineComponent,
    ReportListComponent,
    ClinicAddComponent,
    ClinicListComponent,
    ClinicEditComponent,
    ReceptionistDetailsComponent,
    DoctorListComponent,
    DoctorAddComponent,
    DoctorDetailsComponent,
    DoctorEditComponent,
    // AddDoctorComponent,
    ClinicDetailsComponent,
    DeleteClinicComponent,
    AddMedicinComponent,
    MedicineDetailsComponent,
    UpdateMedicinComponent,
    DeleteMedicinComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    // ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    TableModule,
  ]
})
export class AdminModule { }
