import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ClinicListComponent } from './clinic/clinic-list/clinic-list.component';
import { ClinicAddComponent } from './clinic/clinic-add/clinic-add.component';
import { ClinicEditComponent } from './clinic/clinic-edit/clinic-edit.component';
import { DoctorListComponent } from './doctor/doctor-list/doctor-list.component';
import { DoctorAddComponent } from './doctor/doctor-add/doctor-add.component';
import { DoctorEditComponent } from './doctor/doctor-edit/doctor-edit.component';
import { DoctorDetailsComponent } from './doctor/doctor-details/doctor-details.component';
import { ReceptionistListComponent } from './receptionist/receptionist-list/receptionist-list.component';
import { ReceptionistAddComponent } from './receptionist/receptionist-add/receptionist-add.component';
import { ReceptionistEditComponent } from './receptionist/receptionist-edit/receptionist-edit.component';
import { ReceptionistDetailsComponent } from './receptionist/receptionist-details/receptionist-details.component';

import { MedicineComponent } from './medicine/medicine.component';
import { ReportListComponent } from './report/report-list/report-list.component';



const routes: Routes = [
  {path : 'admin', component : HomeComponent},
  {path : 'admin/profile', component : ProfileComponent},
  {path : 'admin/add_clinic', component : ClinicAddComponent},
  {path : 'admin/list_clinic', component : ClinicListComponent},
  {path : 'admin/edit_clinic', component : ClinicEditComponent},
  {path : 'admin/list_doctors', component : DoctorListComponent},
  {path : 'admin/details_doctor/:docId', component : DoctorDetailsComponent},
  {path : 'admin/add_doctor', component : DoctorAddComponent},
  {path : 'admin/edit_doctor/:docId', component : DoctorEditComponent},
  {path : 'admin/list_receptionists', component : ReceptionistListComponent },
  {path : 'admin/details_receptionist/:recepId', component : ReceptionistDetailsComponent},
  {path : 'admin/add_receptionist', component : ReceptionistAddComponent },
  {path : 'admin/edit_receptionist/:recepId', component : ReceptionistEditComponent },
  {path : 'admin/medicine', component : MedicineComponent},
  {path : 'admin/list_report', component : ReportListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
