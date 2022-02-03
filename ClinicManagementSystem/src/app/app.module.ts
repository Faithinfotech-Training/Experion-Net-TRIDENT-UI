import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AppointmentListComponent } from './appointment/appointmentlist/appointmentlist.component';
import { SharedComponent } from './shared/shared.component';
import {AppointmentService } from './shared/appointment.service';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipe, Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { TestreportComponent } from './testreport/testreport.component';
import { TestreportlistComponent } from './testreport/testreportlist/testreportlist.component';
import { ConsultationbillComponent } from './consultationbill/consultationbill.component';
import { ConsultationbilllistComponent } from './consultationbill/consultationbilllist/consultationbilllist.component';
import { MedicinebillComponent } from './medicinebill/medicinebill.component';
import { MedicinebilllistComponent } from './medicinebill/medicinebilllist/medicinebilllist.component';
import { FinalbillComponent } from './finalbill/finalbill.component';
import { FinalbilllistComponent } from './finalbill/finalbilllist/finalbilllist.component';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentComponent,
    AppointmentListComponent,
    SharedComponent,
    TestreportComponent,
    TestreportlistComponent,
    ConsultationbillComponent,
    ConsultationbilllistComponent,
    MedicinebillComponent,
    MedicinebilllistComponent,
    FinalbillComponent,
    FinalbilllistComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
