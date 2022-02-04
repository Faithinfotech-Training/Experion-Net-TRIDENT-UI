import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prescriptions-view',
  templateUrl: './prescriptions-view.component.html',
  styleUrls: ['./prescriptions-view.component.scss']
})
export class PrescriptionsViewComponent implements OnInit {
  p: number = 1;
  filter: string;
  httpCLient: any;
  public prescriptions = [
    {
      id: 1,
      date: '2020-01-01 12:00',
      name: 'Superman',
    },
    {
      id: 2,
      date: '2020-01-01 12:30',

      name: 'Batman',
    },
    {
      id: 3,
      date: '2020-01-01 01:00',

      name: 'Robin',
    },
    {
      id: 4,
      date: '2020-01-01 01:30',

      name: 'BatGirl',
    },
    {
      id: 5,
      date: '2020-01-01 02:00',
      name: 'nikhil',
    },
    {
      id: 6,
      date: '2020-01-01 02:30',
      name: 'sumeeth',
    },
    {
      id: 7,
      date: '2020-01-01 03:00',
      name: 'sruthi',
    },
    {
      id: 8,
      date: '2020-01-01 03:30',
      name: 'sreehari',
    },
    {
      id: 9,
      date: '2020-01-01 04:00',
      name: 'aathira',
    },
    {
      id: 10,
      date: '2020-01-01 04:30',
      name: 'rahul',
    },
    {
      id: 11,
      date: '2020-01-01 05:00',
      name: 'sai',
    },
    {
      id: 12,
      date: '2020-01-01 05:30',
      name: 'sanjay',
    },
    {
      id: 13,
      date: '2020-01-01 06:00',
      name: 'sethu',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
