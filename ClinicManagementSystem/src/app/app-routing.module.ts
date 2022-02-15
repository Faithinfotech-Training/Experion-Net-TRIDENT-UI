import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorComponent } from './doctor/doctor.component';
import { LoginComponent } from './login/login.component';
import { PatientListComponent } from './patients/patient-list/patient-list.component';
import { PatientComponent } from './patients/patient/patient.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'doctor', component: DoctorComponent, canActivate: [AuthGuard], data: { RoleId: '1' },
  },
  { path: 'patient-list', component:PatientListComponent, canActivate: [AuthGuard], data: { RoleId: '4' }},
  { path: 'add-patient', component: PatientComponent},
  { path: 'update-patient/:pID', component: PatientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
