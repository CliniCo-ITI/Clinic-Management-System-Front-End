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
import { HttpClientModule} from '@angular/common/http';
import { RecepService } from './admin/services/recep.service';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import * as i3 from "@angular/cdk/scrolling";
import {TableModule} from 'primeng/table';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    AdminModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    RecepService,
    TableModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
