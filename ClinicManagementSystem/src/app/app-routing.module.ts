import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DoctorComponent } from './doctor/doctor.component';
import { ViewappointmentComponent } from './doctor/viewappointment/viewappointment.component';
import { LabTechnicianComponent } from './lab-technician/lab-technician.component';
import { TestAdviceListComponent } from './lab-technician/test-advice-list/test-advice-list.component';
import { TestComponent } from './lab-technician/test/test.component';
import { LoginComponent } from './login/login.component';

import { PatientListComponent } from './patients/patient-list/patient-list.component';
import { PatientComponent } from './patients/patient/patient.component';

import { AddappointmentComponent } from './receptionist/addappointment/addappointment.component';
import { AddconsultationComponent } from './receptionist/addconsultation/addconsultation.component';
import { AddinvoiceComponent } from './receptionist/addinvoice/addinvoice.component';
import {ReceptionistComponent} from './receptionist/receptionist.component'
import { ViewappointmentsComponent } from './receptionist/viewappointments/viewappointments.component';
import { ViewconsultationComponent } from './receptionist/viewconsultation/viewconsultation.component';
import { ViewinvoiceComponent } from './receptionist/viewinvoice/viewinvoice.component';

import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'doctor', component: DoctorComponent, canActivate: [AuthGuard], data: { RoleId: '1' },
  },
  { path:'lab-technician', component: LabTechnicianComponent,canActivate: [AuthGuard], data: { RoleId: '4' }},
  { path: 'add-test', component:TestComponent},
  { path: 'test/:tID', component:TestComponent},
  { path: '', component: TestAdviceListComponent},

  { path: 'patient-list', component:PatientListComponent},
  { path: 'patient-list/dashboard', component:PatientListComponent},
  { path: 'add-patient', component: PatientComponent},
  { path: 'update-patient/:pID', component: PatientComponent},

  {
    path: 'receptionist',
    component:ReceptionistComponent,
    canActivate: [AuthGuard],
    data: { RoleId: '3' },
  },
  {
    path: 'receptionist/viewappointment',
    component:ViewappointmentsComponent,
    canActivate: [AuthGuard],
    data: { RoleId: '3' },
  },
  {
    path: 'receptionist/addappointment',
    component:AddappointmentComponent,
    canActivate: [AuthGuard],
    data: { RoleId: '3' },
  },
  {
    path: 'receptionist/addconsultation',
    component:AddconsultationComponent,
    canActivate: [AuthGuard],
    data: { RoleId: '3' },
  },
  {
    path: 'receptionist/addinvoice',
    component:AddinvoiceComponent,
    canActivate: [AuthGuard],
    data: { RoleId: '3' },
  },
  {
    path: 'receptionist/viewconsultation',
    component:ViewconsultationComponent,
    canActivate: [AuthGuard],
    data: { RoleId: '3' },
  },
  {
    path: 'receptionist/viewinvoice',
    component:ViewinvoiceComponent,
    canActivate: [AuthGuard],
    data: { RoleId: '3' },
  },
  {
    path: 'admin',
    component:AdminComponent,
    canActivate: [AuthGuard],
    data: { RoleId: '2' },
  },
  // { path: 'employees/:userId', component: EmployeesComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
