import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { PatientService } from '../shared/services/patient.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lab-technician',
  templateUrl: './lab-technician.component.html',
  styleUrls: ['./lab-technician.component.scss']
})
export class LabTechnicianComponent implements OnInit {

  loggedUser:string;
  page:number =1;
  filter:string;
  constructor(private authService: AuthService,public patientService: PatientService,private router: Router, private toasterService: ToastrService) { }

  ngOnInit(): void {
    this.loggedUser = localStorage.getItem("userName");
  }

  //logout
  logOut(){
    this.authService.logout();
    this.router.navigateByUrl('login');
  }

}
