import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipe, Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PharmacistComponent } from './pharmacist/pharmacist.component';
import { LabTechnicianComponent } from './lab-technician/lab-technician.component';
import { AdminComponent } from './admin/admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { PatientListComponent } from './patients/patient-list/patient-list.component';
import { PatientComponent } from './patients/patient/patient.component';
import { AuthService } from './shared/services/auth.service';
import { PatientService } from './shared/services/patient.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ReceptionistComponent,
    DoctorComponent,
    PharmacistComponent,
    LabTechnicianComponent,
    AdminComponent,
    PatientListComponent,
    PatientComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    CommonModule,
    
  ],
  providers: [AuthService, PatientService],
  bootstrap: [AppComponent],
})
export class AppModule {}
