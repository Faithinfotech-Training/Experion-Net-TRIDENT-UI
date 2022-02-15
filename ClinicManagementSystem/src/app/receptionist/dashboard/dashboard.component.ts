import { Component, OnInit } from '@angular/core';
import { ReceptionistService } from 'src/app/shared/services/receptionist.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  page:number=1;
  filter:string;
  constructor(public receptionservice:ReceptionistService) { }

  ngOnInit(): void {
    this.receptionservice.bindListActiveAppointments();

  

  }

}
