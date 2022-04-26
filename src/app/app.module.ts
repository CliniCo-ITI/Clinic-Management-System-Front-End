import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { } from '@angular/compiler'
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { CoreModule } from './core/core.module';
import { AdminModule } from './admin/admin.module';
import { InvoiceModule } from './invoice/invoice.module';
import { HttpClientModule} from '@angular/common/http';
import { RecepService } from './admin/services/recep.service';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import * as i3 from "@angular/cdk/scrolling";
import {TableModule} from 'primeng/table';
import { LoginComponent } from './pages/login/login.component'
import { Routes } from '@angular/router';
import { ProfileComponent } from './receptionist/profile/profile.component';
import { ReceptionistModule } from './receptionist/receptionist.module';

// const routes: Routes = [
//   { path: "receptionst", component: ProfileComponent }
// ]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    LoginComponent
  ],
  imports: [
  
BrowserModule,
    AppRoutingModule,
    CoreModule,
    AdminModule,
    InvoiceModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ReceptionistModule
  ],
  providers: [
    RecepService,
    TableModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
