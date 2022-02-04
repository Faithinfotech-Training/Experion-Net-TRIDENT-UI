import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../shared/doctor.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-appointment-card',
  templateUrl: './appointment-card.component.html',
  styleUrls: ['./appointment-card.component.scss'],
})
export class AppointmentCardComponent implements OnInit {
  p: number = 1;
  filter: string;
  httpCLient: any;
  public appointments = [
    {
      id: 1,
      date: '2020-01-01 12:00',
      patient: 'Superman',
      doctor: 'sreehari',
      medicine: {
        medicineId: 1,
        medicineName: 'Dolo',
        quantity: 10,
      },
    },
    {
      id: 2,
      date: '2020-01-01 12:30',

      patient: 'Batman',
      doctor: 'sreehari',
      medicine: {
        medicineId: 2,
        medicineName: 'insulin',
        quantity: 2,
      },
    },
    {
      id: 3,
      date: '2020-01-01 01:00',

      patient: 'Robin',
      doctor: 'Aswin',
      medicine: {
        medicineId: 1,
        medicineName: 'Dolo',
        quantity: 20,
      },
    },
    {
      id: 4,
      date: '2020-01-01 01:30',

      patient: 'Vaishnav',
      doctor: 'sreehari',
      medicine: {
        medicineId: 3,
        medicineName: 'Aspirin',
        quantity: 10,
      },
    },
    {
      id: 5,
      date: '2020-01-01 02:00',
      patient: 'Nikhil',
      doctor: 'sreehari',
      medicine: {
        medicineId: 4,
        medicineName: 'Paracetamol',
        quantity: 10,
      },
    },
    {
      id: 6,
      date: '2020-01-01 02:30',
      patient: 'SUmeeth',
      doctor: 'sreehari',
      medicine: {
        medicineId: 1,
        medicineName: 'Dolo',
        quantity: 10,
      },
    },
    {
      id: 7,
      date: '2020-01-01 03:00',
      patient: 'Sruthi',
      doctor: 'sreehari',
      medicine: {
        medicineId: 1,
        medicineName: 'Dolo',
        quantity: 10,
      },
    },
    {
      id: 8,
      date: '2020-01-01 03:30',
      patient: 'Sreelima',
      doctor: 'sreehari',
      medicine: {
        medicineId: 2,
        medicineName: 'Insulin',
        quantity: 1,
      },
    },
    {
      id: 9,
      date: '2020-01-01 04:00',
      patient: 'aathira',
      doctor: 'vaiga',
      medicine: {
        medicineId: 1,
        medicineName: 'Dolo',
        quantity: 10,
      },
    },
    {
      id: 10,
      date: '2020-01-01 04:30',
      patient: 'rahul',
      doctor: 'sreehari',
      medicine: {
        medicineId: 1,
        medicineName: 'Dolo',
        quantity: 10,
      },
    },
    {
      id: 11,
      date: '2020-01-01 05:00',
      patient: 'sai',
      doctor: 'sreehari',
      medicine: {
        medicineId: 1,
        medicineName: 'Dolo',
        quantity: 10,
      },
    },
    {
      id: 12,
      date: '2020-01-01 05:30',
      patient: 'Sanjay',
      doctor: 'sreehari',
      medicine: {
        medicineId: 1,
        medicineName: 'Dolo',
        quantity: 10,
      },
    },
    {
      id: 13,
      date: '2020-01-01 06:00',
      patient: 'sethu',
      doctor: 'sreehari',
      medicine: {
        medicineId: 1,
        medicineName: 'Dolo',
        quantity: 10,
      },
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
