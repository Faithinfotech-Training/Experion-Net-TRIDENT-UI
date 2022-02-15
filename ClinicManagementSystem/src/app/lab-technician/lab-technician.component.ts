import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { PatientService } from '../shared/services/patient.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { LabtTestService } from '../shared/services/labt-test.service';

@Component({
  selector: 'app-lab-technician',
  templateUrl: './lab-technician.component.html',
  styleUrls: ['./lab-technician.component.scss']
})
export class LabTechnicianComponent implements OnInit {

  loggedUser:string;
  page:number =1;
  filter:string;
  tID:number;
  constructor(private authService: AuthService,public labtestService:LabtTestService,private router: Router, private toasterService: ToastrService) { }

  ngOnInit(): void {
    this.loggedUser = localStorage.getItem("userName");
    this.labtestService.bindListTests();
  }

  addTest(){
    this.router.navigateByUrl('add-test');
    this.labtestService.resetForm();   
  }

  //Edit test
  updateTest(tID:number){
    console.log(" going to update this " +tID);
    //navigate to edit form with selected test details
    this.router.navigate(['update-test',tID]);
  }

  //logout
  logOut(){
    this.authService.logout();
    this.router.navigateByUrl('login');
  }

}
