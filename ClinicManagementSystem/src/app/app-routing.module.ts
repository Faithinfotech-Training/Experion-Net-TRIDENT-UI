import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorComponent } from './doctor/doctor.component';
import { LoginComponent } from './login/login.component';
import {ReceptionistComponent} from './receptionist/receptionist.component'
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
