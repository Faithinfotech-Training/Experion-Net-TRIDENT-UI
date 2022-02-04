import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss'],
})
export class DoctorComponent implements OnInit {
  constructor() {}
  //passing the doctors details
  public doctor = { id: 1, name: 'Sreehari', designation: 'Doctor' };

  ngOnInit(): void {}

}
