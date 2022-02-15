import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorComponent } from './doctor/doctor.component';
import { ViewappointmentComponent } from './doctor/viewappointment/viewappointment.component';
import { LoginComponent } from './login/login.component';
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
    path: 'doctor',
    component: DoctorComponent,
    canActivate: [AuthGuard],
    data: { RoleId: '1' },
  },
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
  
  // { path: 'employees/:userId', component: EmployeesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
