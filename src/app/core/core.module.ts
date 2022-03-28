import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {PasswordModule} from 'primeng/password';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {DividerModule} from 'primeng/divider'
import { InvoiceModule } from '../invoice/invoice.module';
import { RouterModule, RoutesRecognized,Routes, RouterLink } from '@angular/router';
import { InvoiceListComponent } from '../invoice/invoice-list/invoice-list.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,PasswordModule,BrowserAnimationsModule,FormsModule,DividerModule,InvoiceModule,RouterModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
