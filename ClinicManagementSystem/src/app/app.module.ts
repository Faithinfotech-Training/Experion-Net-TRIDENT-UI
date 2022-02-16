import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipe, Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PharmacistComponent } from './pharmacist/pharmacist.component';
import { LabTechnicianComponent } from './lab-technician/lab-technician.component';
import { AdminComponent } from './admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

import { PatientListComponent } from './patients/patient-list/patient-list.component';
import { PatientComponent } from './patients/patient/patient.component';
import { AuthService } from './shared/services/auth.service';
import { PatientService } from './shared/services/patient.service';

import { ViewappointmentComponent } from './doctor/viewappointment/viewappointment.component';
import { PrescriptionComponent } from './pharmacist/prescription/prescription.component';
import { MedicinesComponent } from './pharmacist/medicines/medicines.component';
import { AddmedicineComponent } from './pharmacist/addmedicine/addmedicine.component';
import { AddappointmentComponent } from './receptionist/addappointment/addappointment.component';
import { ViewappointmentsComponent } from './receptionist/viewappointments/viewappointments.component';
import { ViewconsultationComponent } from './receptionist/viewconsultation/viewconsultation.component';
import { AddconsultationComponent } from './receptionist/addconsultation/addconsultation.component';
import { AddinvoiceComponent } from './receptionist/addinvoice/addinvoice.component';
import { ViewinvoiceComponent } from './receptionist/viewinvoice/viewinvoice.component';
// import { MedicinesComponent } from './pharmacist/medicines/medicines.component';

import { DashboardComponent } from './receptionist/dashboard/dashboard.component';

import { TestAdviceListComponent } from './lab-technician/test-advice-list/test-advice-list.component';
import { TestComponent } from './lab-technician/test/test.component';




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

    ViewappointmentComponent,

    PrescriptionComponent,
    MedicinesComponent,
    AddmedicineComponent,
    AddappointmentComponent,
    ViewappointmentsComponent,
    ViewconsultationComponent,
    AddconsultationComponent,
    AddinvoiceComponent,
    ViewinvoiceComponent,
    MedicinesComponent,
    DashboardComponent,
    TestAdviceListComponent,
    TestComponent,

  ],
  imports: [
    BrowserModule,
    CommonModule,
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
