import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { InvoiceListComponent } from './invoice/invoice-list/invoice-list.component';
import { ProfileComponent } from './receptionist/profile/profile.component';
import { SidebarComponent } from './receptionist/sidebar/sidebar.component';
import { InvoicesComponent } from './receptionist/invoices/invoices.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: "invoices",
    component: InvoiceListComponent
  },
  {
    path: "receptionst"
    ,
    component: ProfileComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
