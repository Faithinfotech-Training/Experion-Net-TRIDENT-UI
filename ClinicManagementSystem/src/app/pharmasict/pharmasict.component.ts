import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pharmasict',
  templateUrl: './pharmasict.component.html',
  styleUrls: ['./pharmasict.component.scss'],
})
export class PharmasictComponent implements OnInit {
  public pharmacist: {
    id: 1;
    name: 'aswin';
  };

  constructor() {}

  ngOnInit(): void {}
}
