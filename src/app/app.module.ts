import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { CoreModule } from './core/core.module';
import { AdminModule } from './admin/admin.module';
import {HttpClientModule} from '@angular/common/http';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import * as i3 from "@angular/cdk/scrolling";
import {TableModule} from 'primeng/table'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    AdminModule,
    HttpClientModule,
    TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
