import { Component, OnInit } from '@angular/core';
import { PharmacistService } from 'src/app/shared/services/pharmacist.service';

@Component({
  selector: 'app-viewmedicinebill',
  templateUrl: './viewmedicinebill.component.html',
  styleUrls: ['./viewmedicinebill.component.scss']
})
export class ViewmedicinebillComponent implements OnInit {
page:number=1;
filter:string;
  constructor(public medicineservice:PharmacistService) { }

  ngOnInit(): void {
    this.medicineservice.bindMedicineBill();
  }

}
