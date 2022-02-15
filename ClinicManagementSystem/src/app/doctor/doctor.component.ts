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

  constructor(
    private router: Router,
    private authService: AuthService,
    public doctorService: DoctorService
  ) {}

  ngOnInit(): void {
    console.log(this.username);
    console.log('hello doctor ' + this.staffId);
    console.log(+this.staffId);

    this.doctorService.bindListAppointments(+this.staffId);
  }
  //logout function
  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
