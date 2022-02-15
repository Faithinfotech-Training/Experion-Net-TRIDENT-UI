import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { DoctorService } from 'src/app/shared/services/doctor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewappointment',
  templateUrl: './viewappointment.component.html',
  styleUrls: ['./viewappointment.component.scss'],
})
export class ViewappointmentComponent implements OnInit {
  //declare variables
  username = sessionStorage.getItem('userName');
  staffId = sessionStorage.getItem('staffId');
  appointmentId: number;

  constructor(
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute,
    public doctorService: DoctorService
  ) {}

  ngOnInit(): void {
    this.appointmentId = this.route.snapshot.params['id'];
    this.doctorService.bindListAppointmentsByID(+this.appointmentId);
  }
  //logout function
  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
