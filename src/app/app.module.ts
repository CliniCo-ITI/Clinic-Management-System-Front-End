import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { CoreModule } from './core/core.module';
import { InvoiceModule } from './invoice/invoice.module';
import { RouterModule,Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReceptionistModule } from './receptionist/receptionist.module';
import { ProfileComponent } from './receptionist/profile/profile.component';

const routes:Routes=[
  
  {path:"profileReceptionst",component:ProfileComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    InvoiceModule,
    ReceptionistModule,
    RouterModule.forRoot(routes)
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
