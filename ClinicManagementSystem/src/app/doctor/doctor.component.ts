import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { DoctorService } from '../shared/services/doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss'],
})
export class DoctorComponent implements OnInit {
  //declare variables
  username = sessionStorage.getItem('userName');
  staffId = sessionStorage.getItem('staffId');
  appointmentId: number;
  page: number = 1;
  filter: string;

  constructor(
    private router: Router,
    private authService: AuthService,
    public doctorService: DoctorService
  ) {}

  ngOnInit(): void {
    console.log(this.username);
    console.log('hello doctor ' + this.staffId);

    this.doctorService.bindListAppointmentsForToday(+this.staffId);
  }
  //logout function
  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

  //view patient details
  updatePatient(id: number) {
    this.router.navigate(['viewappointments', id]);
   // console.log(id);
  }

  //get appointment number
  updateAppointment(appointmentId: number) {
    console.log('the appointment id is ' + appointmentId);
    this.appointmentId = appointmentId;
  }

  loadApppointments(date) {
    this.doctorService.bindListAppointmentsForDate(+this.staffId, date);
  }
}
