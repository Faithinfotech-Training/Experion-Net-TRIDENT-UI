import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorComponent } from './doctor/doctor.component';
import { ViewappointmentComponent } from './doctor/viewappointment/viewappointment.component';
import { LoginComponent } from './login/login.component';
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
  // { path: 'employees/:userId', component: EmployeesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
