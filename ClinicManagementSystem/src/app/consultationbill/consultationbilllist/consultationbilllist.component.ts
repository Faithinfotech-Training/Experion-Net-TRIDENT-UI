import { Component, OnInit } from '@angular/core';
import { ConsultationbillService } from 'src/app/shared/consultationbill.service';


@Component({
  selector: 'app-consultationbilllist',
  templateUrl: './consultationbilllist.component.html',
  styleUrls: ['./consultationbilllist.component.scss']
})
export class ConsultationbilllistComponent implements OnInit {
  page:number=1;
  filter:string;
  constructor(public consultationbillservice:ConsultationbillService) { }
  ngOnInit(): void {
    this.consultationbillservice.bindListConsultancyBill();
}
}
