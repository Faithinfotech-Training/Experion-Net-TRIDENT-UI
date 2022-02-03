import { Component, OnInit } from '@angular/core';
import {AppointmentService } from '../shared/appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
