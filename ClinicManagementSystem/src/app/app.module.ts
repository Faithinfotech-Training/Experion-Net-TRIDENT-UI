import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

import { PatientsComponent } from './patients/patients.component';
import { PatientsListComponent } from './patients/patients-list/patients-list.component';
import { PatientService } from './shared/patients/patient.service';

import { LabtestsListComponent } from './labtests/labtests-list/labtests-list.component';
import { LabtestsComponent } from './labtests/labtests.component';
import { LabtestService } from './shared/labtests/labtest.service';

import { TestadvicesComponent } from './testadvices/testadvices.component';
import { TestadviceListComponent } from './testadvices/testadvice-list/testadvice-list.component';
import { TestadviceService } from './shared/testadvices/testadvice.service';

@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    PatientsListComponent,   
    LabtestsListComponent,
    LabtestsComponent,
    TestadvicesComponent,
    TestadviceListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    FormsModule 

  ],
  providers: [LabtestService,PatientService,TestadviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
