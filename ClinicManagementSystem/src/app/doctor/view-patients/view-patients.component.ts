import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-patients',
  templateUrl: './view-patients.component.html',
  styleUrls: ['./view-patients.component.scss'],
})
export class ViewPatientsComponent implements OnInit {
  public patient: any = {
    id: 1,
    name: 'Nikhil Nandagopan',
    age: '23',
    address: 'Karnataka',
    phone: '9888888888',
    email: 'nikhil@experion.com',
    bloodGroup: 'O+',
  };
  public medicine: any = ['paracetamol', 'dolo', 'insulin'];
  public labTests: any = [
    'Blood Test',
    'Urine Test',
    'X-Ray',
    'CT Scan',
    'MRI',
    'ECG',
    'Echo',
    'Ultrasound',
  ];

  constructor() {}

  ngOnInit(): void {}
}
