import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfileComponent } from './profile/profile.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { PrescriptionsComponent } from './prescriptions/prescriptions.component';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InputMaskModule} from 'primeng/inputmask';
const routes:Routes = [
  {path:'profile',component:ProfileComponent},
  {path:'appointments',component:AppointmentsComponent},
  {path:'prescriptions',component:PrescriptionsComponent}
]

@NgModule({
  declarations: [
    SidebarComponent,
    ProfileComponent,
    AppointmentsComponent,
    PrescriptionsComponent

  ],
  imports: [
    CommonModule,
    InputMaskModule,
    RouterModule.forChild(routes),
    FontAwesomeModule
  ]
})
export class DoctorModule { }
