import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorComponent } from './doctor/doctor.component';
import { ViewappointmentComponent } from './doctor/viewappointment/viewappointment.component';
import { LoginComponent } from './login/login.component';
import { AddmedicineComponent } from './pharmacist/addmedicine/addmedicine.component';
import { MedicinesComponent } from './pharmacist/medicines/medicines.component';
import { PharmacistComponent } from './pharmacist/pharmacist.component';
import { PrescriptionComponent } from './pharmacist/prescription/prescription.component';
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
    path: 'viewappointments/:id',
    component: ViewappointmentComponent,
    canActivate: [AuthGuard],
    data: { RoleId: '1' },
  },
  {
    path: 'pharmacist',
    component: PharmacistComponent,
    canActivate: [AuthGuard],
    data: { RoleId: '5' },
  },
  {
    path: 'prescription/:id',
    component: PrescriptionComponent,
    canActivate: [AuthGuard],
    data: { RoleId: '5' },
  },
  {
    path: 'prescription',
    component: PrescriptionComponent,
    canActivate: [AuthGuard],
    data: { RoleId: '5' },
  },
  {
    path: 'medicines',
    component: MedicinesComponent,
    canActivate: [AuthGuard],
    data: { RoleId: '5' },
  },
  {
    path: 'addmedicines',
    component: AddmedicineComponent,
    canActivate: [AuthGuard],
    data: { RoleId: '5' },
  },
  // { path: 'employees/:userId', component: EmployeesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
