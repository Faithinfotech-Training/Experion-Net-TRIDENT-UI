import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/shared/patients/patient.service';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.scss']
})
export class PatientsListComponent implements OnInit {

  page:number =1;
  filter:string;
  constructor(public patientService: PatientService) { }

  ngOnInit(): void {

    console.log("hi there!");

    this.patientService.bindListPatients();
  }


  // updatePatient(Patientid:number){
  //   console.log(Patientid);
  //   //updation not implemented
  // }
}
